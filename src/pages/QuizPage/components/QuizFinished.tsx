import { useNavigate } from "react-router-dom";
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
    <div className="min-h-svh bg-canvas flex justify-center">
      <div className="w-full max-w-[480px] bg-bg min-h-svh flex flex-col items-center justify-center text-center px-8 shadow-[var(--shadow)] animate-[fade-in_0.35s_ease]">
        <div className="w-24 h-24 rounded-full bg-primarysoft grid place-items-center text-[42px] text-primary font-extrabold">
          {pct >= 70 ? "★" : "☆"}
        </div>
        <h2 className="text-[26px] font-extrabold text-fg tracking-tight mt-6">
          ¡Tema completado!
        </h2>
        <p className="text-[15px] font-medium text-fgdim mt-2 leading-relaxed">
          Has acertado{" "}
          <b className="text-fg">
            {score} de {total}
          </b>{" "}
          preguntas
        </p>
        <div className="text-[56px] font-extrabold text-primary tracking-tighter my-4">
          {pct}%
        </div>
        <p className="text-[13px] font-semibold text-fgfaint mb-6 truncate max-w-full">
          {topicName}
        </p>
        <div className="flex flex-col gap-2.5 w-full max-w-[280px]">
          <Button variant="primary" onClick={onRepeat}>
            Repetir tema
          </Button>
          <Button variant="secondary" onClick={() => navigate(backPath)}>
            Volver a los temas
          </Button>
        </div>
      </div>
    </div>
  );
}
