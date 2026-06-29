import type { Subject, Topic } from "../types";
import { subjects } from "../data/subjects";
import { delay } from "../utils/delay";

const SIMULATED_DELAY_MS = 0;

export async function getSubjects(): Promise<Subject[]> {
  await delay(SIMULATED_DELAY_MS);
  return subjects;
}

export async function getSubject(id: string): Promise<Subject | null> {
  await delay(SIMULATED_DELAY_MS);
  return subjects.find((s) => s.id === id) ?? null;
}

export async function getTopic(
  subjectId: string,
  topicId: number,
): Promise<Topic | null> {
  await delay(SIMULATED_DELAY_MS);
  const subject = subjects.find((s) => s.id === subjectId);
  return subject?.topics.find((t) => t.id === topicId) ?? null;
}
