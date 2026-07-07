import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import type { Subject } from "../../../types";
import { hueFor, initialsOf, badgeColors } from "../../../utils/subjectVisual";
import { riseIn, EASE } from "../../../utils/animations";

interface Props {
  subject: Subject;
  pct: number;
}

export default function SubjectHeader({ subject, pct }: Props) {
  const { t } = useTranslation();

  const topicCount = subject.topics.filter(
    (topic) => topic.questions.length > 0,
  ).length;
  const totalQuestions = subject.topics.reduce(
    (sum, topic) => sum + topic.questions.length,
    0,
  );

  return (
    <motion.div
      variants={riseIn}
      initial="hidden"
      animate="show"
      className="mb-6"
    >
      <div className="flex items-center gap-3.5">
        <div
          className="w-[50px] h-[50px] rounded-2xl grid place-items-center text-lg font-extrabold shrink-0"
          style={badgeColors(hueFor(subject.id))}
        >
          {subject.icon ?? initialsOf(subject.name)}
        </div>
        <div className="min-w-0">
          <h1 className="text-[22px] font-extrabold text-fg tracking-tight leading-tight line-clamp-2">
            {subject.name}
          </h1>
          <p className="text-[12.5px] font-medium text-fgfaint mt-0.5">
            {t("common.topicsCount", { count: topicCount })} ·{" "}
            {t("common.questionsCount", { count: totalQuestions })}
          </p>
        </div>
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[11px] font-bold text-fgdim uppercase tracking-wider">
            {t("subject.progressLabel")}
          </span>
          <span className="text-[12px] font-extrabold text-primary">
            {pct}%
          </span>
        </div>
        <div className="h-2 rounded-full bg-surface2 overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
          />
        </div>
      </div>
    </motion.div>
  );
}
