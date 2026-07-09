import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useIsBack } from "../../../hooks/backNav";
import { riseIn } from "../../../utils/animations";

interface Props {
  pct: number;
  testsCompleted: number;
  totalQuestions: number;
  subjectsCount: number;
}

export default function ProgressCard({
  pct,
  testsCompleted,
  totalQuestions,
  subjectsCount,
}: Props) {
  const { t } = useTranslation();
  const isBack = useIsBack();

  return (
    <motion.div
      variants={riseIn}
      initial={isBack ? false : "hidden"}
      animate="show"
      className="rounded-[26px] p-5 text-white mb-6"
      style={{
        background:
          "linear-gradient(135deg, var(--color-primary), var(--color-primarystrong))",
        boxShadow: "0 16px 34px -14px var(--color-primary)",
      }}
    >
      <div className="flex justify-between items-start">
        <div>
          <div className="text-[13px] font-semibold opacity-85">
            {t("home.progressLabel")}
          </div>
          <div className="text-[40px] font-extrabold tracking-tighter leading-none mt-1">
            {pct}%
          </div>
        </div>
        <div className="text-right leading-tight">
          <div className="text-[20px] font-extrabold">{testsCompleted}</div>
          <div className="text-[12px] font-semibold opacity-90">
            {t("home.testsDone", { count: testsCompleted })}
          </div>
        </div>
      </div>
      <div className="h-[9px] rounded-full bg-white/25 overflow-hidden mt-4">
        <div
          className="h-full rounded-full bg-white transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="flex justify-between text-[11px] font-semibold opacity-85 mt-2.5">
        <span>{t("common.subjectsCount", { count: subjectsCount })}</span>
        <span>{t("common.questionsCount", { count: totalQuestions })}</span>
      </div>
    </motion.div>
  );
}
