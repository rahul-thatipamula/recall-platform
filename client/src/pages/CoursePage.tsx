import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { api, type Topic, type Level, type RoadmapStage, type SystemDesignScenario } from '../api';

export const LEVELS: Level[] = ['Beginner', 'Intermediate', 'Advanced'];

export function levelBadgeClass(level: Level) {
  return `level-badge level-badge-${level.toLowerCase()}`;
}

const ROADMAP_Y_SPACING = 200;
const ROADMAP_Y_PAD = 110;
const ROADMAP_X_SWING = 27; // % from center

function roadmapX(i: number) {
  return 50 + ROADMAP_X_SWING * Math.sin((i * Math.PI) / 2);
}

function RoadmapPath({ topicKey, stages }: { topicKey: string; stages: RoadmapStage[] }) {
  const pathRef = useRef<SVGPathElement>(null);
  const [drawn, setDrawn] = useState(false);

  const points = stages.map((_, i) => ({ x: roadmapX(i), y: ROADMAP_Y_PAD + i * ROADMAP_Y_SPACING }));
  const height = ROADMAP_Y_PAD * 2 + Math.max(0, stages.length - 1) * ROADMAP_Y_SPACING;

  let d = points.length ? `M ${points[0].x} ${points[0].y}` : '';
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const cur = points[i];
    const dy = (cur.y - prev.y) / 2;
    d += ` C ${prev.x} ${prev.y + dy}, ${cur.x} ${cur.y - dy}, ${cur.x} ${cur.y}`;
  }

  useLayoutEffect(() => {
    setDrawn(false);
    const raf = requestAnimationFrame(() => {
      const el = pathRef.current;
      if (el) {
        const len = el.getTotalLength();
        el.style.strokeDasharray = `${len}`;
        el.style.strokeDashoffset = `${len}`;
      }
      requestAnimationFrame(() => setDrawn(true));
    });
    return () => cancelAnimationFrame(raf);
  }, [stages]);

  return (
    <div className="roadmap-map" style={{ height }}>
      <svg className="roadmap-svg" viewBox={`0 0 100 ${height}`} preserveAspectRatio="none">
        <path ref={pathRef} className={drawn ? 'roadmap-line drawn' : 'roadmap-line'} d={d} />
      </svg>
      {stages.map((stage, i) => {
        const point = points[i];
        const side = point.x >= 50 ? 'roadmap-node-right' : 'roadmap-node-left';
        return (
          <Link
            key={stage.stage}
            to={`/topic/${topicKey}/stage/${i}`}
            className={`roadmap-node ${side}`}
            style={{ left: `${point.x}%`, top: point.y, animationDelay: `${i * 110}ms` }}
          >
            <div className="roadmap-pin" style={{ animationDelay: `${i * 220}ms` }}>
              {i + 1}
            </div>
            <div className="roadmap-card">
              <strong>{stage.stage}</strong>
              <p>{stage.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export function CourseHeader({ topic, showTestingLink = false }: { topic: Topic; showTestingLink?: boolean }) {
  return (
    <header className="course-header">
      <div className="course-header-top">
        <div>
          <h1>{topic.title}</h1>
          <p className="subtitle">{topic.description}</p>
        </div>
        {showTestingLink && (
          <Link to={`/topic/${topic.key}/testing`} className="testing-link">
            Testing
          </Link>
        )}
      </div>
      <RoadmapPath topicKey={topic.key} stages={topic.roadmap} />
    </header>
  );
}

export function CoursePage() {
  const { topicKey } = useParams<{ topicKey: string }>();
  const [topic, setTopic] = useState<Topic | null>(null);

  useEffect(() => {
    if (!topicKey) return;
    setTopic(null);
    api.getTopic(topicKey).then(setTopic);
  }, [topicKey]);

  if (!topic) return <p>Loading…</p>;

  return topic.isWhiteboard ? <WhiteboardCourse topic={topic} /> : <StandardCourse topic={topic} />;
}

function StandardCourse({ topic }: { topic: Topic }) {
  return (
    <div className="page">
      <CourseHeader topic={topic} showTestingLink />
    </div>
  );
}

function WhiteboardCourse({ topic }: { topic: Topic }) {
  const [level, setLevel] = useState<Level | 'All'>('All');
  const [scenarios, setScenarios] = useState<SystemDesignScenario[]>([]);

  useEffect(() => {
    api.getSystemDesignScenarios().then(setScenarios);
  }, []);

  const filtered = level === 'All' ? scenarios : scenarios.filter((s) => s.level === level);

  return (
    <div className="page">
      <CourseHeader topic={topic} />
      <div className="level-filter">
        {(['All', ...LEVELS] as const).map((l) => (
          <button key={l} className={level === l ? 'level-chip active' : 'level-chip'} onClick={() => setLevel(l)}>
            {l}
          </button>
        ))}
      </div>
      <div className="scenario-list">
        {filtered.map((scenario) => (
          <article key={scenario._id} className="tutorial-card">
            <div className="tutorial-card-head">
              <h3>{scenario.title}</h3>
              <span className={levelBadgeClass(scenario.level)}>{scenario.level}</span>
            </div>
            <p>{scenario.prompt}</p>
            <Link to={`/topic/${topic.key}/board/${scenario._id}`}>Open whiteboard →</Link>
          </article>
        ))}
      </div>
    </div>
  );
}
