import type { Subject, Topic } from '../types';
import { subjects } from '../data/subjects';

const SIMULATED_DELAY_MS = 1000;

const delay = () => new Promise((resolve) => setTimeout(resolve, SIMULATED_DELAY_MS));

export async function getSubjects(): Promise<Subject[]> {
  await delay();
  return subjects;
}

export async function getSubject(id: string): Promise<Subject | null> {
  await delay();
  return subjects.find((s) => s.id === id) ?? null;
}

export async function getTopic(subjectId: string, topicId: number): Promise<Topic | null> {
  await delay();
  const subject = subjects.find((s) => s.id === subjectId);
  return subject?.topics.find((t) => t.id === topicId) ?? null;
}
