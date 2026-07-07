type OptionState = 'default' | 'correct' | 'wrong' | 'dimmed';

interface Props {
  label: string;
  text: string;
  state?: OptionState;
  onClick?: () => void;
  disabled?: boolean;
}

const containerStyles: Record<OptionState, string> = {
  default: 'bg-white border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50/40 cursor-pointer active:scale-[0.98]',
  correct: 'bg-green-50 border border-green-200',
  wrong:   'bg-red-50 border border-red-200',
  dimmed:  'bg-white border border-gray-100 opacity-40',
};

const accentStyles: Record<OptionState, string> = {
  default: 'bg-indigo-600',
  correct: 'bg-green-500',
  wrong:   'bg-red-500',
  dimmed:  'bg-gray-200',
};

const labelStyles: Record<OptionState, string> = {
  default: 'text-white/60',
  correct: 'text-white/70',
  wrong:   'text-white/70',
  dimmed:  'text-gray-400',
};

const textStyles: Record<OptionState, string> = {
  default: 'text-gray-800',
  correct: 'text-green-800',
  wrong:   'text-red-700',
  dimmed:  'text-gray-400',
};

export default function OptionCard({ label, text, state = 'default', onClick, disabled }: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full rounded-2xl overflow-hidden flex items-stretch transition-all duration-150 ${containerStyles[state]}`}
    >
      <div className={`flex items-center justify-center w-12 shrink-0 ${accentStyles[state]}`}>
        <span className={`text-sm font-bold ${labelStyles[state]}`}>{label}</span>
      </div>
      <div className="flex items-center px-4 py-4 flex-1">
        <span className={`text-sm font-medium text-left leading-snug ${textStyles[state]}`}>
          {text}
        </span>
      </div>
    </button>
  );
}
