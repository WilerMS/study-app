import type { ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  fullWidth?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary: [
    'bg-primary text-white font-bold',
    'shadow-[0_12px_26px_-12px_var(--color-primary)]',
    'hover:bg-primarystrong',
    'active:translate-y-px',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
    'disabled:opacity-50 disabled:pointer-events-none',
    'rounded-2xl py-4 px-6',
  ].join(' '),

  secondary: [
    'bg-surface text-fg font-bold',
    'border border-line',
    'hover:bg-surface2',
    'active:translate-y-px',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-line focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
    'disabled:opacity-50 disabled:pointer-events-none',
    'rounded-2xl py-4 px-6',
  ].join(' '),

  ghost: [
    'text-primary font-semibold',
    'hover:bg-primarysoft hover:text-primarystrong',
    'active:scale-[0.97]',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
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
