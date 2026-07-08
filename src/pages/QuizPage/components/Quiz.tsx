import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Layout from "../../../components/Layout";
import Button from "../../../components/Button";
import OptionCard from "../../../components/OptionCard";
import Alert from "../../../components/Alert";
import QuizFinished from "./QuizFinished";
import { recordResult } from "../../../utils/progress";
import { EASE } from "../../../utils/animations";
import type { Question, Topic } from "../../../types";

type QuizState = "answering" | "feedback" | "finished";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [quizState, setQuizState] = useState<QuizState>("answering");
  const [score, setScore] = useState(0);
  const [attempt, setAttempt] = useState(0);

  const questions: Question[] = useMemo(
    () => topic.questions.map(shuffleQuestion),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [topic, attempt],
  );

  const current = questions[currentIndex];
  const isCorrect = selected === current.correct;
  const progress =
    ((currentIndex + (quizState === "feedback" ? 1 : 0)) / questions.length) *
    100;

  function getOptionState(index: number) {
    if (quizState !== "feedback") return "default" as const;
    if (index === current.correct) return "correct" as const;
    if (index === selected) return "wrong" as const;
    return "dimmed" as const;
  }

  function handleSelect(index: number) {
    if (quizState !== "answering") return;
    setSelected(index);
    setQuizState("feedback");
    if (index === current.correct) setScore((s) => s + 1);
  }

  function handleNext() {
    if (currentIndex + 1 >= questions.length) {
      const finalScore = score; // already includes the last answer
      recordResult(subjectId, recordKey, (finalScore / questions.length) * 100);
      setQuizState("finished");
    } else {
      setCurrentIndex((i) => i + 1);
      setSelected(null);
      setQuizState("answering");
    }
  }

  function handleRepeat() {
    setCurrentIndex(0);
    setSelected(null);
    setQuizState("answering");
    setScore(0);
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
      />
    );
  }

  return (
    <Layout
      backTo={backPath}
      backIcon="close"
      centerSlot={
        <div className="h-2 rounded-full bg-surface2 overflow-hidden">
          <div
            className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      }
      headerRight={`${currentIndex + 1} / ${questions.length}`}
    >
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
            <div className="text-[21px] font-extrabold text-fg tracking-tight leading-snug text-pretty">
              {current.question}
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="w-5 h-0.5 rounded bg-line" />
            <span className="text-[11px] font-bold text-fgfaint uppercase tracking-wider">
              Elige una opción
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

      {quizState === "feedback" && (
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] z-50 animate-[slide-up_0.34s_cubic-bezier(0.22,1,0.36,1)]">
          <div className="bg-bg rounded-t-[30px] border-t border-line shadow-[0_-18px_44px_-22px_oklch(0.4_0.05_260_/_0.35)] px-5 pt-3.5 pb-[calc(1.5rem+env(safe-area-inset-bottom))]">
            <div className="w-[42px] h-[5px] rounded-full bg-line mx-auto mb-4" />
            <Alert
              variant={isCorrect ? "success" : "danger"}
              title={isCorrect ? "¡Correcto!" : "Incorrecto"}
              description={current.explanation}
            />
            <Button
              variant="primary"
              fullWidth
              onClick={handleNext}
              className="mt-4"
            >
              {currentIndex + 1 >= questions.length
                ? "Ver resultados"
                : "Siguiente pregunta"}
            </Button>
          </div>
        </div>
      )}
    </Layout>
  );
}
