import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { IconTrophy, IconCards, IconTargetArrow } from "@tabler/icons-react";
import type { Subject } from "../../../types";
import { subjectStats, type ProgressData } from "../../../utils/progress";
import { riseIn } from "../../../utils/animations";

interface Props {
  subject: Subject;
  progress: ProgressData;
}

interface StatProps {
  icon: ComponentType<{ size?: number; stroke?: number }>;
  tint: string;
  value: string;
  label: string;
}

function Stat({ icon: Icon, tint, value, label }: StatProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-1.5 py-4 px-2">
      <div className={`w-8 h-8 rounded-full grid place-items-center ${tint}`}>
        <Icon size={17} stroke={2.2} />
      </div>
      <div className="text-[19px] font-extrabold text-fg tabular-nums leading-none">
        {value}
      </div>
      <div className="text-[10px] font-bold text-fgfaint uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

export default function QuickStats({ subject, progress }: Props) {
  const { t } = useTranslation();
  const { mastered, topicsTotal, totalQuestions, attempts } = subjectStats(
    progress,
    subject,
  );

  return (
    <motion.div
      variants={riseIn}
      initial="hidden"
      animate="show"
      className="grid grid-cols-3 rounded-[20px] bg-surface border border-line divide-x divide-line mb-7"
    >
      <Stat
        icon={IconTrophy}
        tint="bg-goodsoft text-good"
        value={`${mastered}/${topicsTotal}`}
        label={t("subject.stats.mastered")}
      />
      <Stat
        icon={IconCards}
        tint="bg-primarysoft text-primary"
        value={String(totalQuestions)}
        label={t("subject.stats.questions")}
      />
      <Stat
        icon={IconTargetArrow}
        tint="bg-primarysoft text-primary"
        value={String(attempts)}
        label={t("subject.stats.attempts")}
      />
    </motion.div>
  );
}
