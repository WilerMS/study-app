import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTopic } from "../../hooks/useTopic";
import StatusScreen from "../../components/StatusScreen";
import Quiz from "./components/Quiz";

export default function QuizPage() {
  const { t } = useTranslation();
  const { subjectId, topicId } = useParams<{
    subjectId: string;
    topicId: string;
  }>();
  const { data: topic, loading, error } = useTopic(subjectId, topicId);

  if (loading || error) return <StatusScreen loading={loading} error={error} />;
  if (!topic || topic.questions.length === 0 || !subjectId) {
    return <StatusScreen error={t("errors.topicNoQuestions")} />;
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
