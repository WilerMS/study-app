import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { IconArrowLeft } from "@tabler/icons-react";
import Alert from "../../../components/Alert";
import OptionCard from "../../../components/OptionCard";
import { haptics } from "../../../utils/haptics";
import type { Question } from "../../../types";

const OPTION_LABELS = ["A", "B", "C", "D", "E", "F"];

type Filter = "wrong" | "all";
type OptState = "correct" | "wrong" | "dimmed";

interface Props {
  questions: Question[];
  answers: number[];
  onBack: () => void;
}

export default function QuizReview({ questions, answers, onBack }: Props) {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<Filter>("wrong");

  const wrongIdx = questions
    .map((_, i) => i)
    .filter((i) => answers[i] !== questions[i].correct);
  const shown = filter === "wrong" ? wrongIdx : questions.map((_, i) => i);

  function optState(qi: number, oi: number): OptState {
    const q = questions[qi];
    if (oi === q.correct) return "correct";
    if (oi === answers[qi]) return "wrong";
    return "dimmed";
  }

  const filters: Filter[] = ["wrong", "all"];

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 overflow-y-auto bg-canvas"
    >
      <div className="min-h-full w-full max-w-[480px] mx-auto bg-bg flex flex-col sm:shadow-[var(--shadow)]">
        <header className="sticky top-0 z-10 bg-bg/90 backdrop-blur-md pt-[env(safe-area-inset-top)]">
          <div className="px-4 h-14 flex items-center gap-3">
            <button
              onClick={() => {
                haptics.tap();
                onBack();
              }}
              className="w-9 h-9 shrink-0 grid place-items-center rounded-xl text-fg bg-surface border border-line hover:bg-surface2 active:scale-95 transition-all"
              aria-label={t("common.back")}
            >
              <IconArrowLeft size={18} stroke={2} />
            </button>
            <span className="flex-1 truncate text-base font-bold text-fg tracking-tight">
              {t("review.title")}
            </span>
          </div>

          <div className="px-4 pb-3 flex gap-2">
            {filters.map((f) => {
              const active = filter === f;
              const count = f === "wrong" ? wrongIdx.length : questions.length;
              return (
                <button
                  key={f}
                  onClick={() => {
                    haptics.tap();
                    setFilter(f);
                  }}
                  className={`flex-1 h-9 rounded-xl text-[13px] font-bold transition-colors ${
                    active ? "bg-primary text-white" : "bg-surface2 text-fgdim"
                  }`}
                >
                  {t(f === "wrong" ? "review.failed" : "review.all")} ({count})
                </button>
              );
            })}
          </div>
        </header>

        <main className="flex-1 px-5 pt-3 pb-[calc(2rem+env(safe-area-inset-bottom))]">
          {shown.length === 0 ? (
            <div className="text-center text-fgdim font-semibold py-16">
              {t("review.noFails")}
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {shown.map((qi, pos) => {
                const q = questions[qi];
                const failed = answers[qi] !== q.correct;
                return (
                  <motion.div
                    key={qi}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                      delay: Math.min(pos * 0.04, 0.3),
                    }}
                    className="bg-surface rounded-[22px] border border-line p-4 shadow-[0_16px_36px_-26px_oklch(0.5_0.08_260/0.55)]"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="shrink-0 w-6 h-6 rounded-lg bg-surface2 text-fgdim grid place-items-center text-[11px] font-extrabold tabular-nums">
                        {qi + 1}
                      </span>
                      <span
                        className={`text-[11px] font-bold uppercase tracking-wider ${
                          failed ? "text-bad" : "text-good"
                        }`}
                      >
                        {t(failed ? "review.failedTag" : "review.correctTag")}
                      </span>
                    </div>

                    <div className="selectable text-[16px] font-bold text-fg leading-snug text-pretty mb-3 [font-variant-numeric:tabular-nums]">
                      {q.question}
                    </div>

                    <div className="flex flex-col gap-2.5">
                      {q.options.map((opt, oi) => (
                        <OptionCard
                          key={oi}
                          label={OPTION_LABELS[oi]}
                          text={opt}
                          state={optState(qi, oi)}
                          readOnly
                        />
                      ))}
                    </div>

                    {q.explanation && (
                      <Alert
                        variant="default"
                        title={t("review.explanation")}
                        description={q.explanation}
                        className="mt-3"
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>
          )}
        </main>
      </div>
    </motion.div>
  );
}
