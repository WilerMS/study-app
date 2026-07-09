import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

type OptionState = "default" | "correct" | "wrong" | "dimmed";

interface Props {
  label: string;
  text: string;
  state?: OptionState;
  onClick?: () => void;
  disabled?: boolean;
  /** Modo repaso: sin interacción ni animación de entrada; se pinta ya en su estado final. */
  readOnly?: boolean;
}

// Diseño B — options sit on a surface card with a square badge and a trailing marker.
const containerStyles: Record<OptionState, string> = {
  default:
    "bg-surface border-line hover:border-primary/50 hover:bg-primarysoft/40 hover:shadow-[0_12px_26px_-18px_var(--color-primary)] cursor-pointer",
  correct:
    "relative z-10 bg-goodsoft border-good shadow-[0_16px_34px_-14px_var(--color-good)]",
  wrong:
    "relative z-10 bg-badsoft border-bad shadow-[0_16px_34px_-14px_var(--color-bad)]",
  dimmed: "bg-surface border-line",
};

const containerReadOnly: Record<OptionState, string> = {
  default: "bg-surface border-line",
  correct: "bg-goodsoft border-good",
  wrong: "bg-badsoft border-bad",
  dimmed: "bg-surface border-line",
};

const badgeStyles: Record<OptionState, string> = {
  default:
    "bg-primarysoft text-primary border border-transparent group-hover:bg-primary group-hover:text-white",
  correct: "bg-good text-white border border-transparent",
  wrong: "bg-bad text-white border border-transparent",
  dimmed: "bg-surface2 text-fgfaint border border-transparent",
};

const trailStyles: Record<OptionState, string> = {
  default: "bg-transparent border-transparent",
  correct: "bg-good border-good text-white",
  wrong: "bg-bad border-bad text-white",
  dimmed: "bg-transparent border-transparent",
};

const trailChar: Record<OptionState, string> = {
  default: "",
  correct: "✓",
  wrong: "✕",
  dimmed: "",
};

const POP = [0.34, 1.56, 0.64, 1] as const;

const cardVariants: Variants = {
  default: { scale: 1, opacity: 1, x: 0, transition: { duration: 0.2 } },
  correct: {
    scale: [1, 1.045, 1],
    opacity: 1,
    x: 0,
    transition: { duration: 0.42, ease: POP },
  },
  wrong: {
    scale: 1,
    opacity: 1,
    x: [0, -7, 6, -4, 3, 0],
    transition: { duration: 0.42, ease: "easeInOut" },
  },
  dimmed: {
    scale: 0.965,
    opacity: 0.5,
    x: 0,
    transition: { duration: 0.28, ease: "easeOut" },
  },
};

const readOnlyVariants: Variants = {
  default: { scale: 1, opacity: 1, x: 0 },
  correct: { scale: 1, opacity: 1, x: 0 },
  wrong: { scale: 1, opacity: 1, x: 0 },
  dimmed: { scale: 1, opacity: 0.5, x: 0 },
};

const markerVariants: Variants = {
  default: { scale: 0, opacity: 0 },
  dimmed: { scale: 0, opacity: 0 },
  correct: { scale: 1, opacity: 1 },
  wrong: { scale: 1, opacity: 1 },
};

export default function OptionCard({
  label,
  text,
  state = "default",
  onClick,
  disabled,
  readOnly,
}: Props) {
  return (
    <motion.button
      onClick={readOnly ? undefined : onClick}
      disabled={disabled || readOnly}
      variants={readOnly ? readOnlyVariants : cardVariants}
      initial={readOnly ? false : undefined}
      animate={state}
      whileTap={disabled || readOnly ? undefined : { scale: 0.97 }}
      className={`group w-full flex items-center gap-3.5 px-4 py-3.5 rounded-[18px] border-2 text-left text-fg transition-[color,background-color,border-color,box-shadow] duration-200 ${
        (readOnly ? containerReadOnly : containerStyles)[state]
      }`}
    >
      <span
        className={`shrink-0 w-9 h-9 rounded-xl grid place-items-center text-sm font-extrabold transition-colors duration-200 ${badgeStyles[state]}`}
      >
        {label}
      </span>
      <span className="flex-1 text-[15px] font-semibold leading-snug [font-variant-numeric:tabular-nums]">
        {text}
      </span>
      <motion.span
        variants={markerVariants}
        initial={readOnly ? false : undefined}
        animate={state}
        transition={{
          type: "spring",
          stiffness: 520,
          damping: 20,
          delay: 0.04,
        }}
        className={`shrink-0 w-6 h-6 rounded-full border-2 grid place-items-center text-[13px] font-extrabold ${trailStyles[state]}`}
      >
        {trailChar[state]}
      </motion.span>
    </motion.button>
  );
}
