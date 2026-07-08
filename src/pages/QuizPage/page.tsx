import { useParams } from "react-router-dom";
import { useTopic } from "../../hooks/useTopic";
import StatusScreen from "../../components/StatusScreen";
import Quiz from "./components/Quiz";

export default function QuizPage() {
  const { subjectId, topicId } = useParams<{
    subjectId: string;
    topicId: string;
  }>();
  const { data: topic, loading, error } = useTopic(subjectId, topicId);

  if (loading || error) return <StatusScreen loading={loading} error={error} />;
  if (!topic || topic.questions.length === 0 || !subjectId) {
    return <StatusScreen error="Este tema no tiene preguntas todavía." />;
  }

  return (
    <Quiz
      topic={topic}
      subjectId={subjectId}
      backPath={`/subject/${subjectId}`}
      recordKey={topic.id}
    />
  );
}
