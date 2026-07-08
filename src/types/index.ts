export interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation?: string;
}

export interface Topic {
  id: number;
  name: string;
  description?: string;
  questions: Question[];
}

export interface Subject {
  id: string;
  name: string;
  icon?: string;
  topics: Topic[];
}
