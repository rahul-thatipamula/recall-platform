import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { api, type Topic, type Concept, type DashboardRow, type Level } from '../api';
import { LEVELS, levelBadgeClass } from './CoursePage';

export function TestingPage() {
  const { topicKey } = useParams<{ topicKey: string }>();
  const [topic, setTopic] = useState<Topic | null>(null);
  const [level, setLevel] = useState<Level | 'All'>('All');
  const [concepts, setConcepts] = useState<Concept[]>([]);
  const [dashboard, setDashboard] = useState<DashboardRow[]>([]);

  useEffect(() => {
    if (!topicKey) return;
    setTopic(null);
    api.getTopic(topicKey).then(setTopic);
  }, [topicKey]);

  useEffect(() => {
    if (!topic) return;
    api.getConcepts({ topic: topic.title, level: level === 'All' ? undefined : level }).then(setConcepts);
  }, [topic, level]);

  useEffect(() => {
    if (!topic) return;
    api.getDashboard().then(setDashboard);
  }, [topic]);

  if (!topic) return <p>Loading…</p>;

  const dashboardByConcept = new Map(dashboard.map((row) => [row.conceptId, row]));

  return (
    <div className="page">
      <Link to={`/topic/${topic.key}`} className="back-link">
        ← {topic.title}
      </Link>
      <header className="course-header">
        <h1>Testing</h1>
        <p className="subtitle">{topic.title}</p>
      </header>

      <div className="level-filter">
        {(['All', ...LEVELS] as const).map((l) => (
          <button key={l} className={level === l ? 'level-chip active' : 'level-chip'} onClick={() => setLevel(l)}>
            {l}
          </button>
        ))}
      </div>

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
    </div>
  );
}
