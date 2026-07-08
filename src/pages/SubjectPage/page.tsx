import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useSubject } from "../../hooks/useSubject";
import StatusScreen from "../../components/StatusScreen";
import Layout from "../../components/Layout";
import { useProgress, subjectPct } from "../../utils/progress";
import SubjectHeader from "./components/SubjectHeader";
import QuickStats from "./components/QuickStats";
import TopicList from "./components/TopicList";
import ExamCTA from "./components/ExamCTA";
import { canBuildExam, EXAM_SIZE } from "../../utils/exam";

export default function SubjectPage() {
  const { t } = useTranslation();
  const { subjectId } = useParams<{ subjectId: string }>();
  const { data: subject, loading, error } = useSubject(subjectId);
  const progress = useProgress();

  const titleRef = useRef<HTMLHeadingElement>(null);
  const [showBarTitle, setShowBarTitle] = useState(false);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    // The compact title in the top bar appears once the big <h1>
    // has scrolled up under the sticky header (56px tall).
    const io = new IntersectionObserver(
      ([entry]) => setShowBarTitle(!entry.isIntersecting),
      { rootMargin: "-56px 0px 0px 0px", threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [subject]);

  if (loading || error) return <StatusScreen loading={loading} error={error} />;
  if (!subject) return null;

  const pct = subjectPct(progress, subject);
  const totalQuestions = subject.topics.reduce(
    (sum, topic) => sum + topic.questions.length,
    0,
  );
  const examEnabled = canBuildExam(subject);

  return (
    <Layout
      backTo="/"
      centerSlot={
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: showBarTitle ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="block truncate text-base font-bold text-fg tracking-tight"
          aria-hidden={!showBarTitle}
        >
          {subject.name}
        </motion.span>
      }
    >
      <SubjectHeader subject={subject} pct={pct} titleRef={titleRef} />

      <QuickStats subject={subject} progress={progress} />

      <div className="text-[13px] font-bold text-fgdim uppercase tracking-wider mb-3">
        {t("subject.topicsSection")}
      </div>
      <TopicList subject={subject} progress={progress} />

      {examEnabled && (
        <>
          <div className="h-24" aria-hidden />
          <ExamCTA
            subjectId={subject.id}
            count={Math.min(EXAM_SIZE, totalQuestions)}
          />
        </>
      )}
    </Layout>
  );
}
