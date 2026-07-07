import { useNavigate } from "react-router-dom";
import Layout from "../../../components/Layout";
import Button from "../../../components/Button";

interface Props {
  score: number;
  total: number;
  topicName: string;
  backPath: string;
  onRepeat: () => void;
}

export default function QuizFinished({ score, total, topicName, backPath, onRepeat }: Props) {
  const navigate = useNavigate();
  const pct = Math.round((score / total) * 100);

  return (
    <Layout backTo={backPath} title={topicName}>
      <div className="flex flex-col items-center pt-4">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 w-full max-w-md text-center">
          <div className="text-6xl mb-4">{pct >= 70 ? "🎉" : "📖"}</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            ¡Sesión terminada!
          </h2>
          <p className="text-gray-500 mb-6">{topicName}</p>
          <div className="bg-indigo-50 rounded-2xl p-6 mb-6">
            <p className="text-5xl font-bold text-indigo-600">{pct}%</p>
            <p className="text-gray-500 mt-1">
              {score} de {total} correctas
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="secondary" className="flex-1" onClick={() => navigate(backPath)}>
              Volver
            </Button>
            <Button variant="primary" className="flex-1" onClick={onRepeat}>
              Repetir
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
