import { useSyncExternalStore } from "react";
import type { Subject } from "../types";

const KEY = "study-app:progress:v1";

export interface ProgressData {
  /** subjectId → topicId → best score (0–100) */
  best: Record<string, Record<string, number>>;
  /** total number of tests finished (may repeat the same topic) */
  testsCompleted: number;
}

const empty: ProgressData = { best: {}, testsCompleted: 0 };

function load(): ProgressData {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === "object") {
        return {
          best: parsed.best ?? {},
          testsCompleted: parsed.testsCompleted ?? 0,
        };
      }
    }
  } catch {
    /* corrupted or unavailable storage — fall back to empty */
  }
  return empty;
}

let cache: ProgressData = load();
const listeners = new Set<() => void>();

function persist() {
  try {
    localStorage.setItem(KEY, JSON.stringify(cache));
  } catch {
    /* ignore write errors (private mode, quota) */
  }
  listeners.forEach((l) => l());
}

/** Store a finished test: keeps the best score per topic and bumps the counter. */
export function recordResult(
  subjectId: string,
  topicId: number | string,
  pct: number,
) {
  const tid = String(topicId);
  const prev = cache.best[subjectId]?.[tid] ?? 0;
  cache = {
    best: {
      ...cache.best,
      [subjectId]: { ...cache.best[subjectId], [tid]: Math.max(prev, Math.round(pct)) },
    },
    testsCompleted: cache.testsCompleted + 1,
  };
  persist();
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}

/** React hook — re-renders whenever progress changes. */
export function useProgress(): ProgressData {
  return useSyncExternalStore(
    subscribe,
    () => cache,
    () => empty,
  );
}

/* ── Pure derivations ───────────────────────────────────────────────────── */

export function topicPct(
  p: ProgressData,
  subjectId: string,
  topicId: number | string,
): number {
  return p.best[subjectId]?.[String(topicId)] ?? 0;
}

/** Average of the best scores across the subject's answerable topics. */
export function subjectPct(p: ProgressData, subject: Subject): number {
  const topics = subject.topics.filter((t) => t.questions.length > 0);
  if (topics.length === 0) return 0;
  const sum = topics.reduce((a, t) => a + topicPct(p, subject.id, t.id), 0);
  return Math.round(sum / topics.length);
}

export function overallStats(p: ProgressData, subjects: Subject[]) {
  const withQuestions = subjects.filter((s) =>
    s.topics.some((t) => t.questions.length > 0),
  );
  const pct = withQuestions.length
    ? Math.round(
        withQuestions.reduce((a, s) => a + subjectPct(p, s), 0) /
          withQuestions.length,
      )
    : 0;
  const totalQuestions = subjects.reduce(
    (a, s) => a + s.topics.reduce((b, t) => b + t.questions.length, 0),
    0,
  );
  return { pct, testsCompleted: p.testsCompleted, totalQuestions };
}
