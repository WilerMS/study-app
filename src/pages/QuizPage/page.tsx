import { useState } from "react";
import { useParams } from "react-router-dom";
import { useTopic } from "../../hooks/useTopic";
import StatusScreen from "../../components/StatusScreen";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import OptionCard from "../../components/OptionCard";
import Alert from "../../components/Alert";
import QuizFinished from "./components/QuizFinished";
import type { Question } from "../../types";

type QuizState = "answering" | "feedback" | "finished";

const OPTION_LABELS = ["A", "B", "C", "D"];

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

  if (loading || error) return <StatusScreen loading={loading} error={error} />;
  if (!topic || topic.questions.length === 0) {
    return <StatusScreen error="Este tema no tiene preguntas todavía." />;
  }

  const questions: Question[] = topic.questions;
  const current = questions[currentIndex];
  const isCorrect = selected === current.correct;
  const progress = ((currentIndex + 1) / questions.length) * 100;
  const backPath = `/subject/${subjectId}`;

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
      title={topic.name}
      progress={progress}
      headerRight={`${currentIndex + 1} / ${questions.length}`}
    >
      <div className="relative mb-8 px-1 overflow-hidden">
        <div className="relative">
          <p className="text-[0.65rem] font-bold text-indigo-400 tracking-[0.25em] uppercase mb-1">
            Pregunta
          </p>
          <p className="text-xl font-bold text-gray-900 leading-snug tracking-tight text-balance">
            {current.question}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-4 px-1">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs font-medium text-gray-400 tracking-wide uppercase">
          Elige una opción
        </span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      <div className="overflow-y-auto max-h-[55vh] mb-4 scrollbar-hide">
        <div className="grid gap-3">
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
      </div>

      {quizState === "feedback" && (
        <div
          className="fixed bottom-0 left-0 right-0 z-50 px-4 py-5
            bg-white/95 backdrop-blur-md rounded-t-3xl shadow-2xl
            animate-[slide-up_0.3s_ease-out]"
        >
          <Alert
            variant={isCorrect ? "success" : "danger"}
            title={isCorrect ? "¡Correcto!" : "Incorrecto"}
            description={current.explanation}
            className="mb-3"
          />
          <Button variant="primary" fullWidth onClick={handleNext}>
            {currentIndex + 1 >= questions.length
              ? "Ver resultados"
              : "Siguiente pregunta"}
          </Button>
        </div>
      )}
    </Layout>
  );
}
