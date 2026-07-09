import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  IconPlayerPlayFilled,
  IconChevronRight,
} from "@tabler/icons-react";
import { useIsBack } from "../../../hooks/backNav";
import { EASE } from "../../../utils/animations";

interface Props {
  subjectId: string;
  /** Nº real de preguntas del simulacro (≤ 10). */
  count: number;
}

export default function ExamCTA({ subjectId, count }: Props) {
  const { t } = useTranslation();
  const isBack = useIsBack();

  return (
    <motion.div
      initial={isBack ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE, delay: 0.35 }}
      className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] z-40 px-5 pt-10 pb-[calc(1rem+env(safe-area-inset-bottom))] bg-gradient-to-t from-bg via-bg to-transparent pointer-events-none"
    >
      <Link
        to={`/exam/${subjectId}`}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        className="pointer-events-auto flex items-center gap-3.5 rounded-[20px] bg-primary text-white pl-4 pr-3.5 py-3 shadow-[0_16px_34px_-14px_var(--color-primary)] select-none active:translate-y-px transition-transform hover:bg-primarystrong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
      >
        <div className="shrink-0 w-11 h-11 rounded-[15px] bg-white/20 grid place-items-center">
          <IconPlayerPlayFilled size={20} />
        </div>
        <div className="flex-1 min-w-0 leading-tight">
          <div className="text-[15px] font-extrabold tracking-tight">
            {t("subject.exam.cta")}
          </div>
          <div className="text-[12px] font-medium text-white/80 mt-0.5">
            {t("subject.exam.ctaSubtitle", { count })}
          </div>
        </div>
        <IconChevronRight size={20} stroke={2.5} className="shrink-0 text-white/85" />
      </Link>
    </motion.div>
  );
}
