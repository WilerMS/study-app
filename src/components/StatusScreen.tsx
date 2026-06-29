import { useNavigate } from 'react-router-dom';
import Button from './Button';

interface Props {
  loading?: boolean;
  error?: string | null;
}

export default function StatusScreen({ loading, error }: Props) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      {loading && (
        <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin" />
      )}
      {error && (
        <div className="text-center">
          <p className="text-gray-500 mb-4">{error}</p>
          <Button variant="ghost" onClick={() => navigate('/')}>
            Volver al inicio
          </Button>
        </div>
      )}
    </div>
  );
}
