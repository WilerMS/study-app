import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSubject } from "../hooks/useSubject";
import StatusScreen from "../components/StatusScreen";
import Layout from "../components/Layout";
import { useProgress, subjectPct, topicPct } from "../utils/progress";
import { hueFor, initialsOf, badgeColors } from "../utils/subjectVisual";
import type { Topic } from "../types";

export default function SubjectPage() {
  const { t } = useTranslation();
  const { subjectId } = useParams<{ subjectId: string }>();
  const { data: subject, loading, error } = useSubject(subjectId);
  const progress = useProgress();

  if (loading || error) return <StatusScreen loading={loading} error={error} />;
  if (!subject) return null;

  const pct = subjectPct(progress, subject);
  const topicCount = subject.topics.filter((t) => t.questions.length > 0).length;

  return (
    <Layout backTo="/">
      <div className="mb-6">
        <div className="flex items-center gap-3.5">
          <div
            className="w-[50px] h-[50px] rounded-2xl grid place-items-center text-lg font-extrabold shrink-0"
            style={badgeColors(hueFor(subject.id))}
          >
            {subject.icon ?? initialsOf(subject.name)}
          </div>
          <div className="min-w-0">
            <h1 className="text-[22px] font-extrabold text-fg tracking-tight leading-tight">
              {subject.name}
            </h1>
            <p className="text-[12.5px] font-medium text-fgfaint mt-0.5">
              {t("common.topicsCount", { count: topicCount })} ·{" "}
              {t("common.completed", { pct })}
            </p>
          </div>
        </div>
        <div className="h-2 rounded-full bg-surface2 overflow-hidden mt-4">
          <div className="h-full rounded-full bg-primary transition-all duration-500" style={{ width: `${pct}%` }} />
        </div>
      </div>

      <div className="text-[13px] font-bold text-fgdim uppercase tracking-wider mb-3">
        {t("subject.topicsSection")}
      </div>
      <div className="flex flex-col gap-2.5">
        {subject.topics.map((topic: Topic) => {
          if (topic.questions.length === 0) {
            return (
              <div
                key={topic.id}
                className="flex items-center gap-3.5 p-4 rounded-[18px] bg-surface border border-line opacity-50"
              >
                <div className="w-11 h-11 rounded-[14px] bg-surface2 grid place-items-center text-fgfaint text-lg shrink-0">
                  —
                </div>
                <div className="min-w-0">
                  <div className="text-[14.5px] font-bold text-fg truncate">{topic.name}</div>
                  <div className="text-[12px] font-medium text-fgfaint mt-0.5">
                    {t("subject.noQuestions")}
                  </div>
                </div>
              </div>
            );
          }

          const tpct = topicPct(progress, subject.id, topic.id);
          const done = tpct >= 70;
          return (
            <Link
              key={topic.id}
              to={`/quiz/${subject.id}/${topic.id}`}
              className="flex items-center gap-3.5 p-4 rounded-[18px] bg-surface border border-line active:scale-[0.99] transition-all"
            >
              <div
                className={`shrink-0 w-11 h-11 rounded-[14px] grid place-items-center text-xs font-extrabold ${
                  done ? "bg-goodsoft text-good" : "bg-primarysoft text-primary"
                }`}
              >
                {tpct}%
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[14.5px] font-bold text-fg tracking-tight truncate">
                  {topic.name}
                </div>
                <div className="h-[5px] rounded-full bg-surface2 overflow-hidden mt-2">
                  <div
                    className={`h-full rounded-full ${done ? "bg-good" : "bg-primary"}`}
                    style={{ width: `${tpct}%` }}
                  />
                </div>
              </div>
              <span className="shrink-0 text-[12px] font-semibold text-fgfaint">
                {t("common.questionsShort", { count: topic.questions.length })}
              </span>
              <span className="shrink-0 text-lg text-fgfaint">›</span>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
}
