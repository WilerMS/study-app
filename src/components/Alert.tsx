import { useState } from 'react';

type AlertVariant = 'success' | 'danger' | 'warning' | 'info';

const variantStyles: Record<
  AlertVariant,
  { container: string; icon: string; title: string; button: string; glyph: string }
> = {
  success: {
    container: 'bg-goodsoft border-good',
    icon: 'bg-good text-white',
    title: 'text-good',
    button: 'text-good',
    glyph: '✓',
  },
  danger: {
    container: 'bg-badsoft border-bad',
    icon: 'bg-bad text-white',
    title: 'text-bad',
    button: 'text-bad',
    glyph: '✕',
  },
  warning: {
    container: 'bg-amber-50 border-amber-300',
    icon: 'bg-amber-500 text-white',
    title: 'text-amber-600',
    button: 'text-amber-600',
    glyph: '!',
  },
  info: {
    container: 'bg-primarysoft border-primary',
    icon: 'bg-primary text-white',
    title: 'text-primary',
    button: 'text-primary',
    glyph: 'i',
  },
};

interface AlertProps {
  variant: AlertVariant;
  title: string;
  description?: string;
  className?: string;
}

export default function Alert({ variant, title, description, className = '' }: AlertProps) {
  const [expanded, setExpanded] = useState(false);
  const styles = variantStyles[variant];

  return (
    <div className={`flex gap-3.5 items-start rounded-[18px] border p-4 ${styles.container} ${className}`}>
      <div
        className={`shrink-0 w-9 h-9 rounded-full grid place-items-center text-lg font-extrabold ${styles.icon}`}
      >
        {styles.glyph}
      </div>
      <div className="flex-1 min-w-0">
        <p className={`text-base font-extrabold tracking-tight ${styles.title}`}>{title}</p>
        {description && (
          <>
            <div
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{ maxHeight: expanded ? '40rem' : '4.5rem' }}
            >
              <p className="text-[13.5px] font-medium text-fgdim leading-relaxed mt-1.5 text-pretty">
                {description}
              </p>
            </div>
            <button
              onClick={() => setExpanded((e) => !e)}
              className={`text-xs font-bold mt-1.5 ${styles.button} hover:underline`}
            >
              {expanded ? 'Ver menos ↑' : 'Ver más ↓'}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
