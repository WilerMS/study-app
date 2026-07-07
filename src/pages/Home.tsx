import { Link } from 'react-router-dom';
import { useSubjects } from '../hooks/useSubjects';
import StatusScreen from '../components/StatusScreen';
import Layout from '../components/Layout';
import UserMenu from '../components/UserMenu';
import { useProgress, subjectPct, overallStats } from '../utils/progress';
import { hueFor, initialsOf, badgeColors } from '../utils/subjectVisual';

export default function Home() {
  const { data: subjects, loading, error } = useSubjects();
  const progress = useProgress();

  if (loading || error) return <StatusScreen loading={loading} error={error} />;

  const stats = overallStats(progress, subjects);

  const brandHeader = (
    <div className="px-5 py-3.5 flex items-center justify-between gap-3">
      <div className="flex items-center gap-2.5">
        <span
          className="shrink-0 w-9 h-9 rounded-[11px] grid place-items-center shadow-[0_6px_14px_-6px_var(--color-primary)]"
          style={{
            background: 'linear-gradient(135deg, var(--color-primary), var(--color-primarystrong))',
          }}
        >
          <svg viewBox="0 0 512 512" className="w-5 h-5" fill="none" aria-hidden="true">
            <polyline
              points="100,281 215,379 420,133"
              stroke="#fff"
              strokeWidth="54"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="text-[19px] font-extrabold text-fg tracking-tight">StudyApp</span>
      </div>
      <UserMenu />
    </div>
  );

  return (
    <Layout header={brandHeader}>
      <div className="mb-5 mt-2">
        <div className="text-sm font-semibold text-fgdim">¡Hola! 👋</div>
        <h1 className="text-[26px] font-extrabold text-fg tracking-tight mt-0.5">
          ¿Qué estudiamos hoy?
        </h1>
      </div>

      <div
        className="rounded-[26px] p-5 text-white mb-6"
        style={{
          background: 'linear-gradient(135deg, var(--color-primary), var(--color-primarystrong))',
          boxShadow: '0 16px 34px -14px var(--color-primary)',
        }}
      >
        <div className="flex justify-between items-start">
          <div>
            <div className="text-[13px] font-semibold opacity-85">Tu progreso general</div>
            <div className="text-[40px] font-extrabold tracking-tighter leading-none mt-1">
              {stats.pct}%
            </div>
          </div>
          <div className="text-right leading-tight">
            <div className="text-[20px] font-extrabold">{stats.testsCompleted}</div>
            <div className="text-[12px] font-semibold opacity-90">tests hechos</div>
          </div>
        </div>
        <div className="h-[9px] rounded-full bg-white/25 overflow-hidden mt-4">
          <div className="h-full rounded-full bg-white transition-all duration-500" style={{ width: `${stats.pct}%` }} />
        </div>
        <div className="flex justify-between text-[11px] font-semibold opacity-85 mt-2.5">
          <span>{subjects.length} asignaturas</span>
          <span>{stats.totalQuestions} preguntas</span>
        </div>
      </div>

      <div className="text-[15px] font-bold text-fg mb-3">Asignaturas</div>
      <div className="grid grid-cols-2 gap-3">
        {subjects.map((subject) => {
          const pct = subjectPct(progress, subject);
          const totalQ = subject.topics.reduce((a, t) => a + t.questions.length, 0);
          const topicCount = subject.topics.filter((t) => t.questions.length > 0).length;
          return (
            <Link
              key={subject.id}
              to={`/subject/${subject.id}`}
              className="flex flex-col gap-3 p-4 rounded-[22px] bg-surface border border-line shadow-[0_6px_16px_-12px_oklch(0.4_0.05_260)] active:scale-[0.98] transition-all"
            >
              <div
                className="w-[46px] h-[46px] rounded-[15px] grid place-items-center text-base font-extrabold"
                style={badgeColors(hueFor(subject.id))}
              >
                {subject.icon ?? initialsOf(subject.name)}
              </div>
              <div>
                <div className="text-[15px] font-bold text-fg tracking-tight leading-tight">
                  {subject.name}
                </div>
                <div className="text-[11.5px] font-medium text-fgfaint mt-0.5">
                  {topicCount} temas · {totalQ} preguntas
                </div>
              </div>
              <div>
                <div className="h-1.5 rounded-full bg-surface2 overflow-hidden">
                  <div className="h-full rounded-full bg-primary" style={{ width: `${pct}%` }} />
                </div>
                <div className="text-[10.5px] font-bold text-fgdim mt-1.5">{pct}% completado</div>
              </div>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
}
