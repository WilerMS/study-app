import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IconChevronRight, IconLock, IconCheck } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import type { Topic } from "../../../types";
import { riseIn } from "../../../utils/animations";

const MotionLink = motion.create(Link);

interface Props {
  subjectId: string;
  topic: Topic;
  pct: number;
}

const DONE_THRESHOLD = 70;

export default function TopicCard({ subjectId, topic, pct }: Props) {
  const { t } = useTranslation();

  if (topic.questions.length === 0) {
    return (
      <motion.div
        variants={riseIn}
        className="flex items-center gap-3.5 p-4 rounded-[18px] bg-surface border border-line opacity-60"
      >
        <div className="shrink-0 w-11 h-11 rounded-[14px] bg-surface2 grid place-items-center text-fgfaint">
          <IconLock size={18} stroke={2} />
        </div>
        <div className="min-w-0">
          <div className="text-[14.5px] font-bold text-fg line-clamp-2">
            {topic.name}
          </div>
          <div className="text-[12px] font-medium text-fgfaint mt-0.5">
            {t("subject.noQuestions")}
          </div>
        </div>
      </motion.div>
    );
  }

  const done = pct >= DONE_THRESHOLD;

  return (
    <MotionLink
      variants={riseIn}
      whileTap={{ scale: 0.99 }}
      to={`/quiz/${subjectId}/${topic.id}`}
      draggable={false}
      onContextMenu={(e) => e.preventDefault()}
      className="group flex items-center gap-3.5 p-4 rounded-[18px] bg-surface border border-line transition-[border-color,box-shadow] outline-none select-none [-webkit-touch-callout:none] hover:border-primary/40 hover:shadow-[0_10px_24px_-16px_oklch(0.4_0.05_260)] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
    >
      <div
        className={`shrink-0 w-11 h-11 rounded-[14px] grid place-items-center text-xs font-extrabold ${
          done ? "bg-goodsoft text-good" : "bg-primarysoft text-primary"
        }`}
      >
        {done ? <IconCheck size={19} stroke={2.6} /> : `${pct}%`}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[14.5px] font-bold text-fg tracking-tight line-clamp-2">
          {topic.name}
        </div>
        <div className="h-[5px] rounded-full bg-surface2 overflow-hidden mt-2">
          <div
            className={`h-full rounded-full ${done ? "bg-good" : "bg-primary"}`}
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
      <span className="shrink-0 text-[12px] font-semibold text-fgfaint">
        {t("common.questionsShort", { count: topic.questions.length })}
      </span>
      <IconChevronRight
        size={18}
        stroke={2.5}
        className="shrink-0 text-fgfaint transition-transform group-hover:translate-x-0.5"
      />
    </MotionLink>
  );
}
