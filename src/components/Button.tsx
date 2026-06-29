import type { ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  fullWidth?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-indigo-600 text-white font-semibold hover:bg-indigo-700 rounded-2xl py-4 px-6 active:scale-95',
  secondary:
    'border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 rounded-xl py-3 px-6',
  ghost:
    'text-indigo-600 font-medium hover:text-indigo-800',
};

export default function Button({
  variant = 'primary',
  fullWidth = false,
  className = '',
  children,
  ...props
}: Props) {
  return (
    <button
      className={`transition-colors ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
