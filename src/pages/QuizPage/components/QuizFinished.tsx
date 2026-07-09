import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { IconRefresh, IconArrowLeft } from "@tabler/icons-react";
import Button from "../../../components/Button";
import ProgressRing from "../../../components/ProgressRing";
import { EASE } from "../../../utils/animations";

interface Props {
  score: number;
  total: number;
  topicName: string;
  backPath: string;
  onRepeat: () => void;
}

interface Tier {
  color: string;
  emoji: string;
  titleKey: string;
  subtitleKey: string;
}

function tierFor(pct: number): Tier {
  if (pct >= 70)
    return {
      color: "var(--color-good)",
      emoji: "🎉",
      titleKey: "results.tiers.highTitle",
      subtitleKey: "results.tiers.highSubtitle",
    };
  if (pct >= 50)
    return {
      color: "var(--color-primary)",
      emoji: "💪",
      titleKey: "results.tiers.midTitle",
      subtitleKey: "results.tiers.midSubtitle",
    };
  return {
    color: "var(--color-bad)",
    emoji: "📚",
    titleKey: "results.tiers.lowTitle",
    subtitleKey: "results.tiers.lowSubtitle",
  };
}

export default function QuizFinished({
  score,
  total,
  topicName,
  backPath,
  onRepeat,
}: Props) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const pct = Math.round((score / total) * 100);
  const tier = tierFor(pct);

  return (
    <div className="min-h-svh bg-canvas flex justify-center">
      <div className="w-full max-w-[480px] bg-bg min-h-svh flex flex-col items-center justify-center text-center px-8 sm:shadow-[var(--shadow)]">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 210, damping: 18, delay: 0.05 }}
        >
          <ProgressRing pct={pct} size={172} stroke={12} color={tier.color}>
            <div className="flex flex-col items-center leading-none">
              <span
                className="text-[46px] font-extrabold tracking-tighter tabular-nums"
                style={{ color: tier.color }}
              >
                {pct}%
              </span>
              <span className="text-[12px] font-bold text-fgfaint mt-1.5 tabular-nums">
                {t("results.hits", { score, total })}
              </span>
            </div>
          </ProgressRing>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE, delay: 0.18 }}
          className="text-[26px] font-extrabold text-fg tracking-tight mt-7"
        >
          {tier.emoji} {t(tier.titleKey)}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE, delay: 0.24 }}
          className="text-[15px] font-medium text-fgdim mt-2 leading-relaxed max-w-[300px]"
        >
          {t(tier.subtitleKey)}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE, delay: 0.3 }}
          className="mt-4 mb-8 px-3.5 py-1.5 rounded-full bg-surface2 text-[12.5px] font-bold text-fgdim max-w-full truncate"
        >
          {topicName}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE, delay: 0.36 }}
          className="flex flex-col gap-2.5 w-full max-w-[300px]"
        >
          <Button variant="primary" onClick={onRepeat}>
            <span className="flex items-center justify-center gap-2">
              <IconRefresh size={18} stroke={2.4} />
              {t("results.repeat")}
            </span>
          </Button>
          <Button variant="secondary" onClick={() => navigate(backPath)}>
            <span className="flex items-center justify-center gap-2">
              <IconArrowLeft size={18} stroke={2.4} />
              {t("results.back")}
            </span>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
