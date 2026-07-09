import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IconArrowLeft, IconX } from "@tabler/icons-react";

interface Props {
  children: ReactNode;
  backTo?: string;
  backIcon?: "arrow" | "close";
  title?: string;
  subtitle?: string;
  progress?: number;
  centerSlot?: ReactNode;
  headerRight?: ReactNode;
  /** Contenido de cabecera personalizado; ocupa el header sticky por completo. */
  header?: ReactNode;
}

export default function Layout({
  children,
  backTo,
  backIcon = "arrow",
  title,
  subtitle,
  progress,
  centerSlot,
  headerRight,
  header,
}: Props) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const hasHeader = header || backTo || title || centerSlot || headerRight;

  return (
    <div className="min-h-svh bg-canvas flex justify-center">
      <div className="w-full max-w-[480px] bg-bg min-h-svh flex flex-col sm:shadow-[var(--shadow)]">
        {hasHeader && (
          <header className="sticky top-0 z-10 bg-bg/90 backdrop-blur-md pt-[env(safe-area-inset-top)]">
            {header ?? (
            <>
            <div className="px-4 h-14 flex items-center gap-3">
              {backTo && (
                <button
                  onClick={() => navigate(backTo)}
                  className={`w-9 h-9 shrink-0 grid place-items-center rounded-xl text-fg active:scale-95 transition-all ${
                    backIcon === "close"
                      ? "bg-surface2"
                      : "bg-surface border border-line hover:bg-surface2"
                  }`}
                  aria-label={backIcon === "close" ? t("common.close") : t("common.back")}
                >
                  {backIcon === "close" ? (
                    <IconX size={18} stroke={2} />
                  ) : (
                    <IconArrowLeft size={18} stroke={2} />
                  )}
                </button>
              )}
              {centerSlot ? (
                <div className="flex-1 min-w-0">{centerSlot}</div>
              ) : (
                title && (
                  <span className="flex-1 truncate text-base font-bold text-fg tracking-tight">
                    {title}
                  </span>
                )
              )}
              {headerRight && (
                <div className="shrink-0 text-sm font-bold text-fgdim">{headerRight}</div>
              )}
            </div>

            {progress !== undefined && (
              <div className="h-2 mx-4 mb-2 rounded-full bg-surface2 overflow-hidden">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}
            </>
            )}
          </header>
        )}

        <main className="flex-1 px-5 pt-2 pb-[calc(2rem+env(safe-area-inset-bottom))]">
          {subtitle && <p className="text-fgdim font-medium mb-6">{subtitle}</p>}
          {children}
        </main>
      </div>
    </div>
  );
}
