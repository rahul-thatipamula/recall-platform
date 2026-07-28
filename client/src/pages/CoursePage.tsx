import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { api, type Topic, type Concept, type DashboardRow, type Level, type SystemDesignScenario } from '../api';

type Tab = 'learning' | 'testing';
const LEVELS: Level[] = ['Beginner', 'Intermediate', 'Advanced'];

function levelBadgeClass(level: Level) {
  return `level-badge level-badge-${level.toLowerCase()}`;
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

function CourseHeader({ topic }: { topic: Topic }) {
  return (
    <header className="course-header">
      <h1>{topic.title}</h1>
      <p className="subtitle">{topic.description}</p>
      <ol className="roadmap">
        {topic.roadmap.map((stage, i) => (
          <li key={stage.stage}>
            <span className="roadmap-index">{i + 1}</span>
            <div>
              <strong>{stage.stage}</strong>
              <p>{stage.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </header>
  );
}

function StandardCourse({ topic }: { topic: Topic }) {
  const [tab, setTab] = useState<Tab>('learning');
  const [level, setLevel] = useState<Level | 'All'>('All');
  const [concepts, setConcepts] = useState<Concept[]>([]);
  const [dashboard, setDashboard] = useState<DashboardRow[]>([]);

  useEffect(() => {
    api.getConcepts({ topic: topic.title, level: level === 'All' ? undefined : level }).then(setConcepts);
  }, [topic.title, level]);

  useEffect(() => {
    api.getDashboard().then(setDashboard);
  }, [topic.title]);

  const dashboardByConcept = new Map(dashboard.map((row) => [row.conceptId, row]));

  return (
    <div className="page">
      <CourseHeader topic={topic} />

      <div className="tabs">
        <button className={tab === 'learning' ? 'tab active' : 'tab'} onClick={() => setTab('learning')}>
          Learning
        </button>
        <button className={tab === 'testing' ? 'tab active' : 'tab'} onClick={() => setTab('testing')}>
          Testing
        </button>
      </div>

      <div className="level-filter">
        {(['All', ...LEVELS] as const).map((l) => (
          <button key={l} className={level === l ? 'level-chip active' : 'level-chip'} onClick={() => setLevel(l)}>
            {l}
          </button>
        ))}
      </div>

      {tab === 'learning' && (
        <div className="concept-list">
          {concepts.map((concept) => (
            <article key={concept._id} className="tutorial-card">
              <div className="tutorial-card-head">
                <h3>{concept.title}</h3>
                <span className={levelBadgeClass(concept.level)}>{concept.level}</span>
              </div>
              <p>{concept.tutorial}</p>
              <Link to={`/topic/${topic.key}/assess/${concept._id}`}>Test yourself on this →</Link>
            </article>
          ))}
        </div>
      )}

      {tab === 'testing' && (
        <table>
          <thead>
            <tr>
              <th>Concept</th>
              <th>Level</th>
              <th>Attempts</th>
              <th>Recognition</th>
              <th>Recall</th>
              <th>Gap</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {concepts.map((concept) => {
              const row = dashboardByConcept.get(concept._id);
              return (
                <tr key={concept._id}>
                  <td>{concept.title}</td>
                  <td><span className={levelBadgeClass(concept.level)}>{concept.level}</span></td>
                  <td>{row?.attemptsCount ?? 0}</td>
                  <td>{row?.recognitionRate == null ? '—' : `${row.recognitionRate}%`}</td>
                  <td>{row?.avgRecallScore == null ? '—' : `${row.avgRecallScore}%`}</td>
                  <td className={row?.gap != null && row.gap > 30 ? 'gap-warning' : ''}>
                    {row?.gap == null ? '—' : `${row.gap}pt`}
                  </td>
                  <td>
                    <Link to={`/topic/${topic.key}/assess/${concept._id}`}>
                      {row?.attemptsCount ? 'Retry' : 'Start'}
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
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
