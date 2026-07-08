import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { EASE } from "../utils/animations";

interface Props {
  pct: number;
  size?: number;
  stroke?: number;
  color?: string;
  children?: ReactNode;
}

export default function ProgressRing({
  pct,
  size = 62,
  stroke = 4,
  color = "var(--color-primary)",
  children,
}: Props) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const clamped = Math.max(0, Math.min(100, pct));

  return (
    <div
      className="relative shrink-0 grid place-items-center"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className="-rotate-90 absolute inset-0">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--color-surface2)"
          strokeWidth={stroke}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: c * (1 - clamped / 100) }}
          transition={{ duration: 0.65, ease: EASE, delay: 0.15 }}
        />
      </svg>
      {children}
    </div>
  );
}
