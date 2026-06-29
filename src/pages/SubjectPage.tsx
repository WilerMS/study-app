import { Link, useParams, useNavigate } from 'react-router-dom';
import { useSubject } from '../hooks/useSubject';
import StatusScreen from '../components/StatusScreen';
import type { Topic } from '../types';

export default function SubjectPage() {
  const { subjectId } = useParams<{ subjectId: string }>();
  const navigate = useNavigate();
  const { data: subject, loading, error } = useSubject(subjectId);

  if (loading || error) return <StatusScreen loading={loading} error={error} />;
  if (!subject) return null;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-indigo-600 font-medium mb-6 hover:text-indigo-800 transition-colors"
        >
          ‹ Volver
        </button>

        <div className="flex items-center gap-3 mb-2">
          {subject.icon && <span className="text-3xl">{subject.icon}</span>}
          <h1 className="text-3xl font-bold text-gray-900">{subject.name}</h1>
        </div>
        <p className="text-gray-500 mb-8">Selecciona un tema para empezar</p>

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
                    <h2 className="text-base font-semibold text-gray-900">{topic.name}</h2>
                    <p className="text-sm text-gray-400 mt-0.5">{topic.questions.length} preguntas</p>
                  </div>
                  <span className="text-gray-300 text-xl">›</span>
                </div>
              </Link>
            ) : (
              <div
                key={topic.id}
                className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 opacity-50"
              >
                <h2 className="text-base font-semibold text-gray-900">{topic.name}</h2>
                <p className="text-sm text-gray-400 mt-0.5">Sin preguntas todavía</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
