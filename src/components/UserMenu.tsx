import { useEffect, useRef, useState } from "react";
import { IconUser, IconSun, IconMoon } from "@tabler/icons-react";
import { useTheme, toggleTheme } from "../utils/theme";

export default function UserMenu() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Cerrar al hacer click fuera o pulsar Escape.
  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: PointerEvent) {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isDark = theme === "dark";

  return (
    <div ref={ref} className="relative shrink-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-8 h-8 grid place-items-center rounded-full bg-surface border border-line text-fgdim active:scale-95 transition-all"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Menú de usuario"
      >
        <IconUser size={16} stroke={2} />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full mt-2 w-60 rounded-[20px] bg-bg/95 backdrop-blur-xl border border-line shadow-[0_26px_54px_-14px_oklch(0.32_0.06_260_/_0.5),0_8px_20px_-8px_oklch(0.32_0.06_260_/_0.32)] p-1.5 z-50 origin-top-right animate-[menu-in_0.16s_ease-out]"
        >
          <div className="flex items-center gap-3 px-2.5 py-2.5">
            <span
              className="shrink-0 w-10 h-10 grid place-items-center rounded-full text-white"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-primary), var(--color-primarystrong))",
              }}
            >
              <IconUser size={19} stroke={2.2} />
            </span>
            <div className="min-w-0">
              <div className="text-sm font-bold text-fg leading-tight">
                Estudiante
              </div>
              <div className="text-[12px] font-medium text-fgfaint leading-tight">
                Sesión local
              </div>
            </div>
          </div>

          <div className="h-px bg-line my-1.5" />

          <button
            role="menuitem"
            onClick={toggleTheme}
            className="w-full flex items-center gap-3 px-2.5 py-2.5 rounded-[13px] text-left hover:bg-surface2 transition-colors"
          >
            <span className="shrink-0 w-8 h-8 grid place-items-center rounded-[10px] bg-surface2 text-fg">
              {isDark ? (
                <IconSun size={17} stroke={2} />
              ) : (
                <IconMoon size={17} stroke={2} />
              )}
            </span>
            <span className="flex-1 text-[14px] font-semibold text-fg">
              Modo oscuro
            </span>
            <span
              className={`shrink-0 w-10 h-6 rounded-full p-0.5 transition-colors ${
                isDark ? "bg-primary" : "bg-surface2"
              }`}
              aria-hidden="true"
            >
              <span
                className={`block w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${
                  isDark ? "translate-x-4" : "translate-x-0"
                }`}
              />
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
