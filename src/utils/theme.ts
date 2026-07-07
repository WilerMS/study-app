import { useSyncExternalStore } from "react";

export type Theme = "light" | "dark";

const KEY = "study-app:theme";

function systemTheme(): Theme {
  return typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function stored(): Theme | null {
  try {
    const v = localStorage.getItem(KEY);
    return v === "light" || v === "dark" ? v : null;
  } catch {
    return null;
  }
}

let theme: Theme = stored() ?? systemTheme();
const listeners = new Set<() => void>();

function applyToDom() {
  document.documentElement.setAttribute("data-theme", theme);
}

// Lock the current effective theme in as an explicit override on first load.
applyToDom();

export function toggleTheme() {
  theme = theme === "dark" ? "light" : "dark";
  try {
    localStorage.setItem(KEY, theme);
  } catch {
    /* ignore write errors */
  }
  applyToDom();
  listeners.forEach((l) => l());
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}

export function useTheme(): Theme {
  return useSyncExternalStore(
    subscribe,
    () => theme,
    () => theme,
  );
}
