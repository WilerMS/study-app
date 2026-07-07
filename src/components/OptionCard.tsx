type OptionState = 'default' | 'correct' | 'wrong' | 'dimmed';

interface Props {
  label: string;
  text: string;
  state?: OptionState;
  onClick?: () => void;
  disabled?: boolean;
}

// Diseño B — options sit on surface2 with a square badge and a trailing marker.
const containerStyles: Record<OptionState, string> = {
  default: 'bg-surface2 border-transparent hover:border-primary/40 cursor-pointer active:scale-[0.99]',
  correct: 'bg-goodsoft border-good shadow-[0_12px_30px_-12px_var(--color-good)]',
  wrong:   'bg-badsoft border-bad shadow-[0_12px_30px_-12px_var(--color-bad)]',
  dimmed:  'bg-surface2 border-transparent opacity-40',
};

const badgeStyles: Record<OptionState, string> = {
  default: 'bg-surface text-primary border border-line',
  correct: 'bg-good text-white border border-transparent',
  wrong:   'bg-bad text-white border border-transparent',
  dimmed:  'bg-surface text-primary border border-line',
};

const trailStyles: Record<OptionState, string> = {
  default: 'opacity-0',
  correct: 'bg-good border-good text-white',
  wrong:   'bg-bad border-bad text-white',
  dimmed:  'opacity-0',
};

const trailChar: Record<OptionState, string> = {
  default: '',
  correct: '✓',
  wrong:   '✕',
  dimmed:  '',
};

export default function OptionCard({ label, text, state = 'default', onClick, disabled }: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full flex items-center gap-3.5 px-4 py-3.5 rounded-[18px] border-2 text-left transition-all duration-200 text-fg ${containerStyles[state]}`}
    >
      <span
        className={`shrink-0 w-9 h-9 rounded-xl grid place-items-center text-sm font-extrabold transition-all ${badgeStyles[state]}`}
      >
        {label}
      </span>
      <span className="flex-1 text-[15px] font-semibold leading-snug">{text}</span>
      <span
        className={`shrink-0 w-6 h-6 rounded-full border-2 grid place-items-center text-[13px] font-extrabold transition-all ${trailStyles[state]}`}
      >
        {trailChar[state]}
      </span>
    </button>
  );
}
