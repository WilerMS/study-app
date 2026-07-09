import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSubject } from "../../hooks/useSubject";
import StatusScreen from "../../components/StatusScreen";
import Quiz from "../QuizPage/components/Quiz";
import { buildExam, canBuildExam, EXAM_KEY } from "../../utils/exam";

export default function ExamPage() {
  const { t } = useTranslation();
  const { subjectId } = useParams<{ subjectId: string }>();
  const { data: subject, loading, error } = useSubject(subjectId);

  const exam = useMemo(
    () => (subject && canBuildExam(subject) ? buildExam(subject) : null),
    [subject],
  );

  if (loading || error) return <StatusScreen loading={loading} error={error} />;
  if (!subject || !exam || !subjectId) {
    return <StatusScreen error={t("errors.subjectNoQuestions")} />;
  }

  return (
    <Quiz
      topic={exam}
      subjectId={subjectId}
      backPath={`/subject/${subjectId}`}
      recordKey={EXAM_KEY}
    />
  );
}
