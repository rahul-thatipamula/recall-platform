export interface GradeResult {
  score: number;
  feedback: string;
  matchedKeywords: string[];
  missedKeywords: string[];
}

export interface RecallGrader {
  grade(answer: string, recallPrompt: string, rubricKeywords: string[]): Promise<GradeResult>;
}

function normalize(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ');
}

// Heuristic stand-in grader: scores keyword coverage against the rubric.
// Swap this out for an LLM-backed grader (see LlmRecallGrader below) once
// a provider is chosen — callers only depend on the RecallGrader interface.
export class HeuristicRecallGrader implements RecallGrader {
  async grade(answer: string, _recallPrompt: string, rubricKeywords: string[]): Promise<GradeResult> {
    const normalizedAnswer = normalize(answer);
    const matched: string[] = [];
    const missed: string[] = [];

    for (const keyword of rubricKeywords) {
      if (normalizedAnswer.includes(normalize(keyword))) {
        matched.push(keyword);
      } else {
        missed.push(keyword);
      }
    }

    const coverage = rubricKeywords.length === 0 ? 0 : matched.length / rubricKeywords.length;
    const lengthPenalty = answer.trim().split(/\s+/).length < 8 ? 0.5 : 1;
    const score = Math.round(coverage * lengthPenalty * 100);

    const feedback =
      missed.length === 0
        ? "Covered all the key ideas — solid recall."
        : `Missing from your explanation: ${missed.join(', ')}.`;

    return { score, feedback, matchedKeywords: matched, missedKeywords: missed };
  }
}

// Placeholder for a future LLM-graded implementation. Wire an API key and
// provider SDK in here, keep the same RecallGrader shape, then flip
// `activeGrader` below.
export class LlmRecallGrader implements RecallGrader {
  async grade(): Promise<GradeResult> {
    throw new Error('LlmRecallGrader is not configured yet');
  }
}

export const activeGrader: RecallGrader = new HeuristicRecallGrader();
