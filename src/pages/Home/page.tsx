import { useTranslation } from "react-i18next";
import { useSubjects } from "../../hooks/useSubjects";
import StatusScreen from "../../components/StatusScreen";
import Layout from "../../components/Layout";
import { useProgress, overallStats } from "../../utils/progress";
import BrandHeader from "./components/BrandHeader";
import ProgressCard from "./components/ProgressCard";
import SubjectGrid from "./components/SubjectGrid";

export default function Home() {
  const { t } = useTranslation();
  const { data: subjects, loading, error } = useSubjects();
  const progress = useProgress();

  if (loading || error) return <StatusScreen loading={loading} error={error} />;

  const stats = overallStats(progress, subjects);

  return (
    <Layout header={<BrandHeader />}>
      <div className="mb-5 mt-2">
        <div className="text-sm font-semibold text-fgdim">{t("home.greeting")}</div>
        <h1 className="text-[26px] font-extrabold text-fg tracking-tight mt-0.5">
          {t("home.title")}
        </h1>
      </div>

      <ProgressCard
        pct={stats.pct}
        testsCompleted={stats.testsCompleted}
        totalQuestions={stats.totalQuestions}
        subjectsCount={subjects.length}
      />

      <div className="text-[15px] font-bold text-fg mb-3">
        {t("home.subjectsSection")}
      </div>
      <SubjectGrid subjects={subjects} progress={progress} />
    </Layout>
  );
}
