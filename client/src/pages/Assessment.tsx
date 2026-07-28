import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { api, type AttemptResult, type Concept } from '../api';

type Step = 'recognition' | 'recall' | 'result';

export function Assessment() {
  const { conceptId, topicKey } = useParams<{ conceptId: string; topicKey: string }>();
  const backLink = topicKey ? `/topic/${topicKey}` : '/';
  const [concept, setConcept] = useState<Concept | null>(null);
  const [step, setStep] = useState<Step>('recognition');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [recallAnswer, setRecallAnswer] = useState('');
  const [result, setResult] = useState<AttemptResult | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!conceptId) return;
    api.getConcept(conceptId).then(setConcept);
  }, [conceptId]);

  if (!concept) return <p>Loading…</p>;

  async function handleSubmitRecall() {
    if (!conceptId || selectedIndex === null) return;
    setSubmitting(true);
    const res = await api.submitAttempt(conceptId, selectedIndex, recallAnswer);
    setResult(res);
    setStep('result');
    setSubmitting(false);
  }

  return (
    <div className="page assessment">
      <Link to={backLink}>← Back to course</Link>
      <h1>{concept.title}</h1>
      <p className="topic-badge">{concept.topic}</p>

      {step === 'recognition' && (
        <div className="step">
          <h2>Step 1 · Recognition</h2>
          <p>{concept.recognition.prompt}</p>
          <div className="options">
            {concept.recognition.options.map((option, i) => (
              <label key={i} className={selectedIndex === i ? 'option selected' : 'option'}>
                <input
                  type="radio"
                  name="recognition"
                  checked={selectedIndex === i}
                  onChange={() => setSelectedIndex(i)}
                />
                {option}
              </label>
            ))}
          </div>
          <button disabled={selectedIndex === null} onClick={() => setStep('recall')}>
            Continue to recall
          </button>
        </div>
      )}

      {step === 'recall' && (
        <div className="step">
          <h2>Step 2 · Recall</h2>
          <p>{concept.recallPrompt}</p>
          <textarea
            rows={8}
            value={recallAnswer}
            onChange={(e) => setRecallAnswer(e.target.value)}
            placeholder="Explain it as if you were answering in a technical interview, from memory — no looking things up."
          />
          <button disabled={recallAnswer.trim().length === 0 || submitting} onClick={handleSubmitRecall}>
            {submitting ? 'Grading…' : 'Submit'}
          </button>
        </div>
      )}

      {step === 'result' && result && (
        <div className="step result">
          <h2>Result</h2>
          <div className="score-row">
            <div>
              <span className="score-label">Recognition</span>
              <span className={result.recognitionCorrect ? 'score-good' : 'score-bad'}>
                {result.recognitionCorrect ? 'Correct' : 'Incorrect'}
              </span>
            </div>
            <div>
              <span className="score-label">Recall</span>
              <span className="score-value">{result.recallScore}%</span>
            </div>
          </div>
          <p className="feedback">{result.feedback}</p>
          {result.recognitionCorrect && result.recallScore < 60 && (
            <p className="insight">
              You recognized this concept but couldn't recall it well — that's the recognition/recall gap this
              platform is built to close. Revisit this one soon.
            </p>
          )}
          <Link to={backLink}>Back to course</Link>
        </div>
      )}
    </div>
  );
}
