import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from './Button';

interface Props {
  loading?: boolean;
  error?: string | null;
}

export default function StatusScreen({ loading, error }: Props) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="min-h-svh bg-bg flex items-center justify-center px-6">
      {loading && (
        <div className="w-8 h-8 border-4 border-surface2 border-t-primary rounded-full animate-spin" />
      )}
      {error && (
        <div className="text-center">
          <p className="text-fgdim font-medium mb-4">{error}</p>
          <Button variant="ghost" onClick={() => navigate('/')}>
            {t('common.backToHome')}
          </Button>
        </div>
      )}
    </div>
  );
}
