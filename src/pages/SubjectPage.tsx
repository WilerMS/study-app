import { Link, useParams } from "react-router-dom";
import { useSubject } from "../hooks/useSubject";
import StatusScreen from "../components/StatusScreen";
import Layout from "../components/Layout";
import type { Topic } from "../types";

export default function SubjectPage() {
  const { subjectId } = useParams<{ subjectId: string }>();
  const { data: subject, loading, error } = useSubject(subjectId);

  if (loading || error) return <StatusScreen loading={loading} error={error} />;
  if (!subject) return null;

  return (
    <Layout
      backTo="/"
      title={subject.icon ? `${subject.icon} ${subject.name}` : subject.name}
      subtitle="Selecciona un tema para empezar"
    >
      <div className="grid gap-3">
        {subject.topics.map((topic: Topic) =>
          topic.questions.length > 0 ? (
            <Link
              key={topic.id}
              to={`/quiz/${subject.id}/${topic.id}`}
              className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-indigo-200 transition-all duration-200 active:scale-95"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-semibold text-gray-900">
                    {topic.name}
                  </h2>
                  <p className="text-sm text-gray-400 mt-0.5">
                    {topic.questions.length} preguntas
                  </p>
                </div>
                <span className="text-gray-300 text-xl">›</span>
              </div>
            </Link>
          ) : (
            <div
              key={topic.id}
              className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 opacity-50"
            >
              <h2 className="text-base font-semibold text-gray-900">
                {topic.name}
              </h2>
              <p className="text-sm text-gray-400 mt-0.5">
                Sin preguntas todavía
              </p>
            </div>
          ),
        )}
      </div>
    </Layout>
  );
}
