export type Level = 'Beginner' | 'Intermediate' | 'Advanced';

export interface RoadmapStage {
  stage: string;
  description: string;
}

export interface Topic {
  _id: string;
  key: string;
  title: string;
  description: string;
  order: number;
  roadmap: RoadmapStage[];
  isWhiteboard: boolean;
}

export interface RecognitionQuestion {
  prompt: string;
  options: string[];
  correctIndex: number;
}

export interface Concept {
  _id: string;
  topic: string;
  level: Level;
  title: string;
  tutorial: string;
  recognition: RecognitionQuestion;
  recallPrompt: string;
  rubricKeywords: string[];
}

export interface AttemptResult {
  recognitionCorrect: boolean;
  recallScore: number;
  feedback: string;
  matchedKeywords: string[];
  missedKeywords: string[];
}

export interface DashboardRow {
  conceptId: string;
  topic: string;
  title: string;
  attemptsCount: number;
  recognitionRate: number | null;
  avgRecallScore: number | null;
  gap: number | null;
  lastAttemptAt: string | null;
}

export interface SystemDesignScenario {
  _id: string;
  level: Level;
  title: string;
  prompt: string;
  expectedComponents: string[];
}

export interface SystemDesignEvalResult {
  score: number;
  feedback: string;
  matchedComponents: string[];
  missedComponents: string[];
}

async function json<T>(res: Response): Promise<T> {
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.json() as Promise<T>;
}

export const api = {
  getTopics: () => fetch('/api/topics').then((r) => json<Topic[]>(r)),
  getTopic: (key: string) => fetch(`/api/topics/${key}`).then((r) => json<Topic>(r)),

  getConcepts: (params?: { topic?: string; level?: Level }) => {
    const qs = new URLSearchParams();
    if (params?.topic) qs.set('topic', params.topic);
    if (params?.level) qs.set('level', params.level);
    const suffix = qs.toString() ? `?${qs.toString()}` : '';
    return fetch(`/api/concepts${suffix}`).then((r) => json<Concept[]>(r));
  },
  getConcept: (id: string) => fetch(`/api/concepts/${id}`).then((r) => json<Concept>(r)),
  getDashboard: () => fetch('/api/attempts/dashboard').then((r) => json<DashboardRow[]>(r)),
  submitAttempt: (conceptId: string, recognitionSelectedIndex: number, recallAnswer: string) =>
    fetch('/api/attempts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ conceptId, recognitionSelectedIndex, recallAnswer }),
    }).then((r) => json<AttemptResult>(r)),

  getSystemDesignScenarios: () => fetch('/api/system-design/scenarios').then((r) => json<SystemDesignScenario[]>(r)),
  getSystemDesignScenario: (id: string) =>
    fetch(`/api/system-design/scenarios/${id}`).then((r) => json<SystemDesignScenario>(r)),
  submitSystemDesignAttempt: (scenarioId: string, snapshot: unknown) =>
    fetch('/api/system-design/attempts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ scenarioId, snapshot }),
    }).then((r) => json<SystemDesignEvalResult>(r)),
};
