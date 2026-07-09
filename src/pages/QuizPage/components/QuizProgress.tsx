import { Trans } from "react-i18next";
import { IconCheck, IconX } from "@tabler/icons-react";

interface Props {
  total: number;
  currentIndex: number;
  results: boolean[];
}

export default function QuizProgress({ total, currentIndex, results }: Props) {
  const correct = results.filter(Boolean).length;
  const wrong = results.length - correct;

  function segmentClass(i: number): string {
    if (i < results.length) {
      return results[i] ? "bg-good" : "bg-bad";
    }
    if (i === currentIndex) return "bg-primary";
    return "bg-surface2";
  }

  return (
    <div className="mb-5">
      <div className="flex items-center justify-between mb-2.5">
        <span className="text-[12.5px] font-bold text-fgdim tabular-nums">
          <Trans
            i18nKey="quiz.questionProgress"
            values={{ current: Math.min(currentIndex + 1, total), total }}
            components={[<span key="current" className="text-fg" />]}
          />
        </span>
        <div className="flex items-center gap-1.5">
          <span className="inline-flex items-center gap-1 pl-1.5 pr-2 py-0.5 rounded-full bg-goodsoft text-good text-[12px] font-extrabold tabular-nums">
            <IconCheck size={13} stroke={3} />
            {correct}
          </span>
          <span className="inline-flex items-center gap-1 pl-1.5 pr-2 py-0.5 rounded-full bg-badsoft text-bad text-[12px] font-extrabold tabular-nums">
            <IconX size={13} stroke={3} />
            {wrong}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-1">
        {Array.from({ length: total }, (_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${segmentClass(i)}`}
          />
        ))}
      </div>
    </div>
  );
}
