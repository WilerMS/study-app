import type { Subject, Topic, Question } from "../types";

/** Preguntas de un simulacro completo (3 Act1 + 4 Act2 + 3 Banco). */
export const EXAM_SIZE = 10;

/** Synthetic topic id used to store the best score of a simulacro. */
export const EXAM_KEY = "exam";

/** Fisher-Yates: devuelve `n` elementos al azar (o todos si n ≥ length). */
function pickRandom<T>(arr: T[], n: number): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, Math.max(0, n));
}

/** Peso de cada topic según su rol en el examen real. */
function roleWeight(name: string): number {
  const n = name.toLowerCase();
  if (n.startsWith("actividad 2")) return 4;
  if (n.startsWith("actividad 1")) return 3;
  if (n.startsWith("banco")) return 3;
  return 3;
}

/** ¿Se puede montar un simulacro? (hay al menos una pregunta) */
export function canBuildExam(subject: Subject): boolean {
  return subject.topics.some((t) => t.questions.length > 0);
}

/**
 * Compone un simulacro tipo examen mezclando preguntas de las actividades y el
 * banco con la distribución real (3/4/3). Se adapta a lo que haya: si falta un
 * bloque, reparte las 10 preguntas entre los presentes; si no hay 10 en total,
 * usa las que existan.
 */
export function buildExam(subject: Subject): Topic {
  const topics = subject.topics.filter((t) => t.questions.length > 0);
  const totalAvailable = topics.reduce((a, t) => a + t.questions.length, 0);
  const target = Math.min(EXAM_SIZE, totalAvailable);

  const weights = topics.map((t) => roleWeight(t.name));
  const weightSum = weights.reduce((a, b) => a + b, 0) || 1;

  // Cuota inicial proporcional al peso, acotada por la disponibilidad.
  const quotas = topics.map((t, i) =>
    Math.min(
      t.questions.length,
      Math.round((weights[i] / weightSum) * target),
    ),
  );

  // Ajuste fino para cuadrar exactamente `target` sin pasarse de lo disponible.
  let diff = target - quotas.reduce((a, b) => a + b, 0);
  while (diff !== 0) {
    let changed = false;
    for (let i = 0; i < topics.length && diff !== 0; i++) {
      if (diff > 0 && quotas[i] < topics[i].questions.length) {
        quotas[i]++;
        diff--;
        changed = true;
      } else if (diff < 0 && quotas[i] > 0) {
        quotas[i]--;
        diff++;
        changed = true;
      }
    }
    if (!changed) break;
  }

  const picked: Question[] = topics.flatMap((t, i) =>
    pickRandom(t.questions, quotas[i]),
  );

  return {
    id: -1,
    name: "Simulacro de examen",
    questions: pickRandom(picked, picked.length), // intercala bloques
  };
}
