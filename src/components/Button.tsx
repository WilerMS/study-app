import type { ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  fullWidth?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary: [
    'bg-gradient-to-b from-indigo-500 to-indigo-600 text-white font-semibold tracking-wide',
    'hover:from-indigo-400 hover:to-indigo-500',
    'active:translate-y-px active:from-indigo-600 active:to-indigo-700',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:pointer-events-none',
    'rounded-2xl py-4 px-6',
  ].join(' '),

  secondary: [
    'bg-white text-gray-800 font-medium',
    'ring-1 ring-gray-200/80',
    'hover:bg-gray-50 hover:ring-gray-300 hover:text-gray-900',
    'active:translate-y-px active:bg-gray-100',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:pointer-events-none',
    'rounded-xl py-3 px-6',
  ].join(' '),

  ghost: [
    'text-indigo-600 font-medium',
    'hover:bg-indigo-50 hover:text-indigo-700',
    'active:bg-indigo-100 active:scale-[0.97]',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:pointer-events-none',
    'rounded-xl py-2 px-4',
  ].join(' '),
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
      className={`transition-all duration-150 cursor-pointer select-none ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
