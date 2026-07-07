import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { IconArrowLeft } from "@tabler/icons-react";

interface Props {
  children: ReactNode;
  backTo?: string;
  title?: string;
  subtitle?: string;
  progress?: number;
  headerRight?: ReactNode;
}

export default function Layout({
  children,
  backTo,
  title,
  subtitle,
  progress,
  headerRight,
}: Props) {
  const navigate = useNavigate();
  const hasHeader = backTo || title;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {hasHeader && (
        <header className="bg-white sticky top-0 z-10">
          <div className="px-4 h-14 flex items-center gap-3">
            {backTo && (
              <button
                onClick={() => navigate(backTo)}
                className="w-9 h-9 flex items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 active:scale-95 transition-all shrink-0"
                aria-label="Volver"
              >
                <IconArrowLeft size={18} stroke={2} />
              </button>
            )}
            {title && (
              <span className="font-semibold text-gray-900 text-base truncate flex-1">
                {title}
              </span>
            )}
            {headerRight && (
              <div className="shrink-0 text-sm text-gray-400">
                {headerRight}
              </div>
            )}
          </div>

          {progress !== undefined ? (
            <div className="h-1 bg-gray-100">
              <div
                className="h-full bg-indigo-500 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          ) : (
            <div className="h-px bg-gray-200" />
          )}
        </header>
      )}

      <main className="flex-1 p-5">
        <div className="max-w-2xl mx-auto">
          {subtitle && <p className="text-gray-500 mb-6">{subtitle}</p>}
          {children}
        </div>
      </main>
    </div>
  );
}
