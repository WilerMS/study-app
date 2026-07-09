import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Layout from "../../../components/Layout";
import Button from "../../../components/Button";
import OptionCard from "../../../components/OptionCard";
import Alert from "../../../components/Alert";
import QuizProgress from "./QuizProgress";
import QuizFinished from "./QuizFinished";
import { recordResult } from "../../../utils/progress";
import { haptics } from "../../../utils/haptics";
import { EASE } from "../../../utils/animations";
import type { Question, Topic } from "../../../types";

type QuizState = "answering" | "feedback" | "finished";

//Staged revelation phases after responding:
//"option" → only the touched option is colored (green/red).
//"answer" → the correct one is revealed and the others are grayed out.
//"panel" → brings up the bottom panel with the explanation.
type RevealPhase = "option" | "answer" | "panel";

const REVEAL_DELAY = 240; //ms: option touched → reveal correct + fade rest
const PANEL_DELAY = 200; //ms: reveal → bottom panel appears

const OPTION_LABELS = ["A", "B", "C", "D", "E", "F"];

const stage: Variants = {
  initial: { opacity: 0, x: 26 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: EASE,
      staggerChildren: 0.05,
      delayChildren: 0.03,
    },
  },
  exit: { opacity: 0, x: -26, transition: { duration: 0.2, ease: EASE } },
};

const item: Variants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: EASE } },
};

const optionsWrap: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.05, delayChildren: 0.02 } },
};

interface Props {
  topic: Topic;
  subjectId: string;
  backPath: string;
  /** Clave contra la que se guarda la puntuación (id de tema o EXAM_KEY). */
  recordKey: number | string;
}

function shuffleQuestion(q: Question): Question {
  const order = q.options.map((_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return {
    ...q,
    options: order.map((i) => q.options[i]),
    correct: order.indexOf(q.correct),
  };
}

export default function Quiz({ topic, subjectId, backPath, recordKey }: Props) {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [quizState, setQuizState] = useState<QuizState>("answering");
  const [phase, setPhase] = useState<RevealPhase>("option");
  const [score, setScore] = useState(0);
  const [results, setResults] = useState<boolean[]>([]);
  const [answers, setAnswers] = useState<number[]>([]);
  const [attempt, setAttempt] = useState(0);

  const timers = useRef<number[]>([]);
  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };
  // Limpia los timers pendientes si el componente se desmonta a media revelación.
  useEffect(() => clearTimers, []);

  const questions: Question[] = useMemo(
    () => topic.questions.map(shuffleQuestion),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [topic, attempt],
  );

  const current = questions[currentIndex];
  const isCorrect = selected === current.correct;

  function getOptionState(index: number) {
    if (quizState !== "feedback") return "default" as const;
    // Fase 1: solo la opción tocada revela su color; el resto siguen neutras.
    if (phase === "option") {
      if (index === selected)
        return index === current.correct ? "correct" : "wrong";
      return "default" as const;
    }
    // Fase 2+: revelación completa (correcta en verde, resto atenuadas).
    if (index === current.correct) return "correct" as const;
    if (index === selected) return "wrong" as const;
    return "dimmed" as const;
  }

  function handleSelect(index: number) {
    if (quizState !== "answering") return;
    setSelected(index);
    setQuizState("feedback");
    setPhase("option");
    const ok = index === current.correct;
    if (ok) {
      setScore((s) => s + 1);
      haptics.success();
    } else {
      haptics.error();
    }
    setResults((r) => [...r, ok]);
    setAnswers((a) => [...a, index]);

    // Revelación por pasos: la opción tocada ya está coloreada; lo demás espera.
    clearTimers();
    timers.current.push(
      window.setTimeout(() => setPhase("answer"), REVEAL_DELAY),
    );
    timers.current.push(
      window.setTimeout(() => setPhase("panel"), REVEAL_DELAY + PANEL_DELAY),
    );
  }

  function handleNext() {
    clearTimers();
    if (currentIndex + 1 >= questions.length) {
      const finalScore = score; // already includes the last answer
      recordResult(subjectId, recordKey, (finalScore / questions.length) * 100);
      setQuizState("finished");
    } else {
      setCurrentIndex((i) => i + 1);
      setSelected(null);
      setQuizState("answering");
      setPhase("option");
    }
  }

  function handleRepeat() {
    clearTimers();
    setCurrentIndex(0);
    setSelected(null);
    setQuizState("answering");
    setPhase("option");
    setScore(0);
    setResults([]);
    setAnswers([]);
    setAttempt((a) => a + 1);
  }

  if (quizState === "finished") {
    return (
      <QuizFinished
        score={score}
        total={questions.length}
        topicName={topic.name}
        backPath={backPath}
        onRepeat={handleRepeat}
        questions={questions}
        answers={answers}
      />
    );
  }

  return (
    <Layout backTo={backPath} backIcon="close">
      <QuizProgress
        total={questions.length}
        currentIndex={currentIndex}
        results={results}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          variants={stage}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.div
            variants={item}
            className="bg-primarysoft rounded-[24px] border border-primary/10 p-5 mb-5 shadow-[0_12px_32px_-20px_var(--color-primary)]"
          >
            <div className="flex items-center gap-2 mb-2.5">
              <span className="shrink-0 w-6 h-6 rounded-lg bg-primary/15 text-primarystrong grid place-items-center text-[11px] font-extrabold tabular-nums">
                {currentIndex + 1}
              </span>
              <span className="text-[11px] font-bold text-primarystrong uppercase tracking-wider truncate">
                {topic.name}
              </span>
            </div>
            <div className="selectable text-[20px] font-bold text-fg tracking-tight leading-relaxed text-pretty [font-variant-numeric:tabular-nums]">
              {current.question}
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="w-5 h-0.5 rounded bg-line" />
            <span className="text-[11px] font-bold text-fgfaint uppercase tracking-wider">
              {t("quiz.chooseOption")}
            </span>
            <span className="w-5 h-0.5 rounded bg-line" />
          </motion.div>

          <motion.div
            variants={optionsWrap}
            className={`flex flex-col gap-2.5 ${quizState === "feedback" ? "pb-72" : ""}`}
          >
            {current.options.map((option, index) => (
              <motion.div key={index} variants={item}>
                <OptionCard
                  label={OPTION_LABELS[index]}
                  text={option}
                  state={getOptionState(index)}
                  onClick={() => handleSelect(index)}
                  disabled={quizState === "feedback"}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {quizState === "feedback" && phase === "panel" && (
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] z-50 animate-[slide-up_0.34s_cubic-bezier(0.22,1,0.36,1)]">
          <div className="bg-bg rounded-t-[30px] border-t border-line shadow-[0_-18px_44px_-22px_oklch(0.4_0.05_260_/_0.35)] px-5 pt-3.5 pb-[calc(1.5rem+env(safe-area-inset-bottom))]">
            <div className="w-[42px] h-[5px] rounded-full bg-line mx-auto mb-4" />
            <Alert
              variant={isCorrect ? "success" : "danger"}
              title={isCorrect ? t("quiz.correct") : t("quiz.incorrect")}
              description={current.explanation}
            />
            <Button
              variant="primary"
              fullWidth
              onClick={handleNext}
              className="mt-4"
            >
              {currentIndex + 1 >= questions.length
                ? t("quiz.seeResults")
                : t("quiz.nextQuestion")}
            </Button>
          </div>
        </div>
      )}
    </Layout>
  );
}
