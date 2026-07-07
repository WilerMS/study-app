import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useTopic } from "../../hooks/useTopic";
import StatusScreen from "../../components/StatusScreen";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import OptionCard from "../../components/OptionCard";
import Alert from "../../components/Alert";
import QuizFinished from "./components/QuizFinished";
import { recordResult } from "../../utils/progress";
import type { Question } from "../../types";

type QuizState = "answering" | "feedback" | "finished";

const OPTION_LABELS = ["A", "B", "C", "D", "E", "F"];

/**
 * Reordena aleatoriamente las opciones de una pregunta (Fisher-Yates) y
 * recalcula el índice de la respuesta correcta para que siga apuntando a la
 * misma opción. Evita que la correcta caiga siempre en el mismo sitio.
 */
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

export default function QuizPage() {
  const { subjectId, topicId } = useParams<{
    subjectId: string;
    topicId: string;
  }>();
  const { data: topic, loading, error } = useTopic(subjectId, topicId);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [quizState, setQuizState] = useState<QuizState>("answering");
  const [score, setScore] = useState(0);
  const [attempt, setAttempt] = useState(0);

  // Baraja las opciones una vez por carga del tema (y en cada repetición),
  // no en cada render, para que el orden se mantenga estable mientras se
  // responde la pregunta.
  const questions: Question[] = useMemo(
    () => (topic ? topic.questions.map(shuffleQuestion) : []),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [topic, attempt],
  );

  if (loading || error) return <StatusScreen loading={loading} error={error} />;
  if (!topic || questions.length === 0) {
    return <StatusScreen error="Este tema no tiene preguntas todavía." />;
  }

  const current = questions[currentIndex];
  const isCorrect = selected === current.correct;
  const backPath = `/subject/${subjectId}`;
  const progress =
    ((currentIndex + (quizState === "feedback" ? 1 : 0)) / questions.length) * 100;

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
      if (subjectId && topicId) {
        recordResult(subjectId, topicId, (finalScore / questions.length) * 100);
      }
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
    setAttempt((a) => a + 1); // rebaraja las opciones al repetir
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
      <div className="bg-primarysoft rounded-[22px] p-5 mb-5">
        <div className="text-xs font-bold text-primarystrong uppercase tracking-wider">
          {topic.name}
        </div>
        <div className="text-[22px] font-extrabold text-fg tracking-tight leading-snug mt-2 text-pretty">
          {current.question}
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 mb-4">
        <span className="w-5 h-0.5 rounded bg-line" />
        <span className="text-[11px] font-bold text-fgfaint uppercase tracking-wider">
          Elige una opción
        </span>
        <span className="w-5 h-0.5 rounded bg-line" />
      </div>

      <div className={`flex flex-col gap-2.5 ${quizState === "feedback" ? "pb-72" : ""}`}>
        {current.options.map((option, index) => (
          <OptionCard
            key={index}
            label={OPTION_LABELS[index]}
            text={option}
            state={getOptionState(index)}
            onClick={() => handleSelect(index)}
            disabled={quizState === "feedback"}
          />
        ))}
      </div>

      {quizState === "feedback" && (
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] z-50 animate-[slide-up_0.34s_cubic-bezier(0.22,1,0.36,1)]">
          <div className="bg-bg rounded-t-[30px] border-t border-line shadow-[0_-18px_44px_-20px_oklch(0.4_0.05_260)] px-5 pt-3.5 pb-[calc(1.5rem+env(safe-area-inset-bottom))]">
            <div className="w-[42px] h-[5px] rounded-full bg-line mx-auto mb-4" />
            <Alert
              variant={isCorrect ? "success" : "danger"}
              title={isCorrect ? "¡Correcto!" : "Incorrecto"}
              description={current.explanation}
            />
            <Button variant="primary" fullWidth onClick={handleNext} className="mt-4">
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
