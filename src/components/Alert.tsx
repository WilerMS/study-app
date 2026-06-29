type AlertVariant = 'success' | 'danger' | 'warning' | 'info';

const variantStyles: Record<AlertVariant, { container: string; title: string }> = {
  success: {
    container: 'bg-green-50 border border-green-200',
    title: 'text-green-700',
  },
  danger: {
    container: 'bg-red-50 border border-red-200',
    title: 'text-red-700',
  },
  warning: {
    container: 'bg-yellow-50 border border-yellow-200',
    title: 'text-yellow-700',
  },
  info: {
    container: 'bg-blue-50 border border-blue-200',
    title: 'text-blue-700',
  },
};

interface AlertProps {
  variant: AlertVariant;
  title: string;
  description?: string;
  className?: string;
}

export default function Alert({ variant, title, description, className = '' }: AlertProps) {
  const styles = variantStyles[variant];

  return (
    <div className={`rounded-2xl p-5 mb-4 ${styles.container} ${className}`}>
      <p className={`font-bold mb-1 ${styles.title}`}>{title}</p>
      {description && <p className="text-sm text-gray-600">{description}</p>}
    </div>
  );
}
