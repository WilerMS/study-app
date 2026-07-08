import { motion } from "framer-motion";
import type { Ref } from "react";
import { useTranslation } from "react-i18next";
import type { Subject } from "../../../types";
import { hueFor, initialsOf, badgeColors } from "../../../utils/subjectVisual";
import { riseIn } from "../../../utils/animations";
import ProgressRing from "../../../components/ProgressRing";

interface Props {
  subject: Subject;
  pct: number;
  titleRef?: Ref<HTMLHeadingElement>;
}

export default function SubjectHeader({ subject, pct, titleRef }: Props) {
  const { t } = useTranslation();

  return (
    <motion.div
      variants={riseIn}
      initial="hidden"
      animate="show"
      className="mb-7 flex items-center gap-4"
    >
      <ProgressRing pct={pct}>
        <span
          className="text-[19px] font-extrabold leading-none"
          style={{ color: badgeColors(hueFor(subject.id)).color }}
        >
          {subject.icon ?? initialsOf(subject.name)}
        </span>
      </ProgressRing>

      <div className="min-w-0">
        <h1
          ref={titleRef}
          className="text-[22px] font-extrabold text-fg tracking-tight leading-tight line-clamp-2"
        >
          {subject.name}
        </h1>
        <p className="text-[12.5px] font-semibold text-fgfaint mt-1">
          {pct > 0 ? t("common.completed", { pct }) : t("subject.notStarted")}
        </p>
      </div>
    </motion.div>
  );
}
