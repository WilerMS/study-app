import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import type { Subject } from "../../../types";
import { hueFor, initialsOf, badgeColors } from "../../../utils/subjectVisual";
import { riseIn } from "../../../utils/animations";

const MotionLink = motion.create(Link);

interface Props {
  subject: Subject;
  pct: number;
}

export default function SubjectCard({ subject, pct }: Props) {
  const { t } = useTranslation();

  const totalQuestions = subject.topics.reduce(
    (sum, topic) => sum + topic.questions.length,
    0,
  );
  const topicCount = subject.topics.filter(
    (topic) => topic.questions.length > 0,
  ).length;

  return (
    <MotionLink
      variants={riseIn}
      whileTap={{ scale: 0.98 }}
      to={`/subject/${subject.id}`}
      draggable={false}
      onContextMenu={(e) => e.preventDefault()}
      className="flex flex-col gap-3 p-4 rounded-[22px] bg-surface border border-line shadow-[0_6px_16px_-12px_oklch(0.4_0.05_260)] transition-colors outline-none select-none [-webkit-touch-callout:none] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
    >
      <div
        className="w-[46px] h-[46px] rounded-[15px] grid place-items-center text-base font-extrabold"
        style={badgeColors(hueFor(subject.id))}
      >
        {subject.icon ?? initialsOf(subject.name)}
      </div>
      <div>
        <div className="text-[15px] font-bold text-fg tracking-tight leading-tight line-clamp-2">
          {subject.name}
        </div>
        <div className="text-[11.5px] font-medium text-fgfaint mt-0.5 truncate">
          {t("common.topicsCount", { count: topicCount })} ·{" "}
          {t("common.questionsCount", { count: totalQuestions })}
        </div>
      </div>
      <div className="mt-auto">
        <div className="h-1.5 rounded-full bg-surface2 overflow-hidden">
          <div
            className="h-full rounded-full bg-primary"
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="text-[10.5px] font-bold text-fgdim mt-1.5">
          {t("common.completed", { pct })}
        </div>
      </div>
    </MotionLink>
  );
}
