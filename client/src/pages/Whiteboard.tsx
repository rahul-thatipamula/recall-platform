import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tldraw, createShapeId, type Editor, type TLShapeId } from 'tldraw';
import { toRichText } from '@tldraw/tlschema';
import 'tldraw/tldraw.css';
import { api, type SystemDesignScenario, type SystemDesignEvalResult } from '../api';

const COMPONENT_PALETTE = [
  'Client',
  'Load Balancer',
  'API Gateway',
  'Application Server',
  'Cache',
  'Database',
  'Message Queue',
  'CDN',
  'Blob Storage',
];

function storageKey(scenarioId: string) {
  return `recall.whiteboard.${scenarioId}`;
}

export function Whiteboard() {
  const { topicKey, scenarioId } = useParams<{ topicKey: string; scenarioId: string }>();
  const [scenario, setScenario] = useState<SystemDesignScenario | null>(null);
  const [result, setResult] = useState<SystemDesignEvalResult | null>(null);
  const [evaluating, setEvaluating] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved'>('idle');
  const editorRef = useRef<Editor | null>(null);
  const saveTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!scenarioId) return;
    api.getSystemDesignScenario(scenarioId).then(setScenario);
  }, [scenarioId]);

  function handleMount(editor: Editor) {
    editorRef.current = editor;

    if (scenarioId) {
      const saved = localStorage.getItem(storageKey(scenarioId));
      if (saved) {
        try {
          editor.loadSnapshot(JSON.parse(saved));
        } catch {
          // ignore corrupt/incompatible saved snapshot
        }
      }
    }

    editor.store.listen(
      () => {
        setSaveStatus('saving');
        if (saveTimeout.current) clearTimeout(saveTimeout.current);
        saveTimeout.current = setTimeout(() => {
          if (!scenarioId) return;
          const snapshot = editor.getSnapshot();
          localStorage.setItem(storageKey(scenarioId), JSON.stringify(snapshot));
          setSaveStatus('saved');
        }, 600);
      },
      { source: 'user', scope: 'document' }
    );
  }

  function insertComponent(label: string, x?: number, y?: number) {
    const editor = editorRef.current;
    if (!editor) return null;
    const center = editor.getViewportPageBounds().center;
    const offset = Math.random() * 120 - 60;
    const id = createShapeId();
    editor.createShape({
      id,
      type: 'geo',
      x: x ?? center.x + offset - 80,
      y: y ?? center.y + offset - 30,
      props: { geo: 'rectangle', w: 160, h: 60, richText: toRichText(label) },
    });
    return id;
  }

  function connect(fromId: TLShapeId, toId: TLShapeId) {
    const editor = editorRef.current;
    if (!editor) return;
    const arrowId = createShapeId();
    try {
      editor.createShape({ id: arrowId, type: 'arrow', x: 0, y: 0 });
      editor.createBindings([
        {
          type: 'arrow',
          fromId: arrowId,
          toId: fromId,
          props: { terminal: 'start', normalizedAnchor: { x: 0.5, y: 0.5 }, isExact: false, isPrecise: false, snap: 'none' },
        },
        {
          type: 'arrow',
          fromId: arrowId,
          toId: toId,
          props: { terminal: 'end', normalizedAnchor: { x: 0.5, y: 0.5 }, isExact: false, isPrecise: false, snap: 'none' },
        },
      ]);
    } catch {
      // if binding creation fails for any reason, the boxes still exist on their own
    }
  }

  function insertStarterArchitecture() {
    const editor = editorRef.current;
    if (!editor || !scenario) return;
    const center = editor.getViewportPageBounds().center;
    const labels = scenario.expectedComponents.map((c) => c.replace(/\b\w/g, (m) => m.toUpperCase()));
    const spacing = 220;
    const startX = center.x - ((labels.length - 1) * spacing) / 2;

    const ids = labels.map((label, i) => insertComponent(label, startX + i * spacing - 80, center.y - 30));

    for (let i = 0; i < ids.length - 1; i++) {
      const a = ids[i];
      const b = ids[i + 1];
      if (a && b) connect(a, b);
    }
  }

  async function handleEvaluate() {
    const editor = editorRef.current;
    if (!editor || !scenarioId) return;
    setEvaluating(true);
    const snapshot = editor.getSnapshot();
    const res = await api.submitSystemDesignAttempt(scenarioId, snapshot);
    setResult(res);
    setEvaluating(false);
  }

  if (!scenario || !topicKey) return <p>Loading…</p>;

  return (
    <div className="whiteboard-page">
      <div className="whiteboard-header">
        <div>
          <Link to={`/topic/${topicKey}`}>← Back to scenarios</Link>
          <div className="whiteboard-title-row">
            <h1>{scenario.title}</h1>
            <span className="save-status">
              {saveStatus === 'saving' && 'Saving…'}
              {saveStatus === 'saved' && 'Saved automatically'}
            </span>
          </div>
          <p className="subtitle">{scenario.prompt}</p>
        </div>
        <div className="whiteboard-actions">
          <button className="evaluate-button" disabled={evaluating} onClick={handleEvaluate}>
            {evaluating ? 'Evaluating…' : 'Evaluate (temporary)'}
          </button>
        </div>
      </div>

      <div className="whiteboard-body">
        <aside className="component-palette">
          <h3>Components</h3>
          <p className="palette-hint">Click to drop a labeled box, then wire connections with the arrow tool.</p>
          {COMPONENT_PALETTE.map((label) => (
            <button key={label} className="palette-item" onClick={() => insertComponent(label)}>
              {label}
            </button>
          ))}
          <button className="template-button" onClick={insertStarterArchitecture}>
            Insert connected starter layout
          </button>
        </aside>

        <div className="tldraw-container">
          <Tldraw onMount={handleMount} />
        </div>
      </div>

      {result && (
        <div className="eval-panel">
          <div className="score-row">
            <div>
              <span className="score-label">Coverage score</span>
              <span className="score-value">{result.score}%</span>
            </div>
          </div>
          <p className="feedback">{result.feedback}</p>
        </div>
      )}
    </div>
  );
}
