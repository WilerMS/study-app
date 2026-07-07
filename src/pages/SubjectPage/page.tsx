import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSubject } from "../../hooks/useSubject";
import StatusScreen from "../../components/StatusScreen";
import Layout from "../../components/Layout";
import { useProgress, subjectPct } from "../../utils/progress";
import SubjectHeader from "./components/SubjectHeader";
import TopicList from "./components/TopicList";

export default function SubjectPage() {
  const { t } = useTranslation();
  const { subjectId } = useParams<{ subjectId: string }>();
  const { data: subject, loading, error } = useSubject(subjectId);
  const progress = useProgress();

  if (loading || error) return <StatusScreen loading={loading} error={error} />;
  if (!subject) return null;

  const pct = subjectPct(progress, subject);

  return (
    <Layout backTo="/" title={subject.name}>
      <SubjectHeader subject={subject} pct={pct} />

      <div className="text-[13px] font-bold text-fgdim uppercase tracking-wider mb-3">
        {t("subject.topicsSection")}
      </div>
      <TopicList subject={subject} progress={progress} />
    </Layout>
  );
}
