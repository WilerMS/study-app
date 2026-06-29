import { Link } from 'react-router-dom';
import { useSubjects } from '../hooks/useSubjects';
import StatusScreen from '../components/StatusScreen';
import Layout from '../components/Layout';

export default function Home() {
  const { data: subjects, loading, error } = useSubjects();

  if (loading || error) return <StatusScreen loading={loading} error={error} />;

  return (
    <Layout title="Mis asignaturas" subtitle="Selecciona una asignatura para estudiar">
      <div className="grid gap-4">
        {subjects.map((subject) => (
          <Link
            key={subject.id}
            to={`/subject/${subject.id}`}
            className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-indigo-200 transition-all duration-200 active:scale-95"
          >
            <div className="flex items-center gap-4">
              {subject.icon && <span className="text-3xl">{subject.icon}</span>}
              <div>
                <h2 className="text-lg font-semibold text-gray-900">{subject.name}</h2>
                <p className="text-sm text-gray-400 mt-0.5">
                  {subject.topics.length} temas ·{' '}
                  {subject.topics.reduce((acc, t) => acc + t.questions.length, 0)} preguntas
                </p>
              </div>
              <span className="ml-auto text-gray-300 text-xl">›</span>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
}
