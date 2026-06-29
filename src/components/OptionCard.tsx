type OptionState = 'default' | 'correct' | 'wrong' | 'dimmed';

interface Props {
  label: string;
  text: string;
  state?: OptionState;
  onClick?: () => void;
  disabled?: boolean;
}

const stateStyles: Record<OptionState, string> = {
  default: 'bg-white border-2 border-gray-100 text-gray-800 hover:border-indigo-300 hover:shadow-sm cursor-pointer active:scale-95',
  correct: 'bg-green-50 border-2 border-green-400 text-green-800',
  wrong:   'bg-red-50 border-2 border-red-400 text-red-800',
  dimmed:  'bg-white border-2 border-gray-100 text-gray-400',
};

export default function OptionCard({ label, text, state = 'default', onClick, disabled }: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full rounded-2xl p-4 text-left font-medium transition-all duration-150 ${stateStyles[state]}`}
    >
      <span className="text-xs font-bold mr-2 opacity-50">{label}</span>
      {text}
    </button>
  );
}
