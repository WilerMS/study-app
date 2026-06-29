import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTopic } from "../hooks/useTopic";
import StatusScreen from "../components/StatusScreen";
import Layout from "../components/Layout";
import Button from "../components/Button";
import OptionCard from "../components/OptionCard";
import Alert from "../components/Alert";
import type { Question } from "../types";

type QuizState = "answering" | "feedback" | "finished";

const OPTION_LABELS = ["A", "B", "C", "D"];

export default function QuizPage() {
  const navigate = useNavigate();
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
    const pct = Math.round((score / questions.length) * 100);
    return (
      <Layout backTo={backPath} title={topic.name}>
        <div className="flex flex-col items-center pt-4">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 w-full max-w-md text-center">
            <div className="text-6xl mb-4">{pct >= 70 ? "🎉" : "📖"}</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              ¡Sesión terminada!
            </h2>
            <p className="text-gray-500 mb-6">{topic.name}</p>
            <div className="bg-indigo-50 rounded-2xl p-6 mb-6">
              <p className="text-5xl font-bold text-indigo-600">{pct}%</p>
              <p className="text-gray-500 mt-1">
                {score} de {questions.length} correctas
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                variant="secondary"
                className="flex-1"
                onClick={() => navigate(backPath)}
              >
                Volver
              </Button>
              <Button variant="primary" className="flex-1" onClick={handleRepeat}>
                Repetir
              </Button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      backTo={backPath}
      title={topic.name}
      progress={progress}
      headerRight={`${currentIndex + 1} / ${questions.length}`}
    >
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 mb-4">
        <p className="text-lg font-semibold text-gray-900 leading-relaxed">
          {current.question}
        </p>
      </div>

      <div className="grid gap-3 mb-4">
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
        <Alert
          variant={isCorrect ? "success" : "danger"}
          title={isCorrect ? "¡Correcto!" : "Incorrecto"}
          description={current.explanation}
        />
      )}

      {quizState === "feedback" && (
        <Button variant="primary" fullWidth onClick={handleNext}>
          {currentIndex + 1 >= questions.length
            ? "Ver resultados"
            : "Siguiente pregunta"}
        </Button>
      )}
    </Layout>
  );
}
