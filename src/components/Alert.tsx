import { useState } from 'react';

type AlertVariant = 'success' | 'danger' | 'warning' | 'info';

const variantStyles: Record<AlertVariant, { container: string; title: string; button: string }> = {
  success: {
    container: 'bg-green-50 border border-green-200',
    title: 'text-green-700',
    button: 'text-green-600',
  },
  danger: {
    container: 'bg-red-50 border border-red-200',
    title: 'text-red-700',
    button: 'text-red-600',
  },
  warning: {
    container: 'bg-yellow-50 border border-yellow-200',
    title: 'text-yellow-700',
    button: 'text-yellow-600',
  },
  info: {
    container: 'bg-blue-50 border border-blue-200',
    title: 'text-blue-700',
    button: 'text-blue-600',
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
    <div className={`rounded-2xl p-5 ${styles.container} ${className}`}>
      <p className={`font-bold mb-2 ${styles.title}`}>{title}</p>
      {description && (
        <>
          <div
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{ maxHeight: expanded ? '500px' : '4.27rem' }}
          >
            <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
          </div>
          <button
            onClick={() => setExpanded((e) => !e)}
            className={`text-xs font-semibold mt-2 ${styles.button} hover:underline`}
          >
            {expanded ? 'Ver menos ↑' : 'Ver más ↓'}
          </button>
        </>
      )}
    </div>
  );
}
