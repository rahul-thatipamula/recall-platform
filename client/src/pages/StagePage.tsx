import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { api, type Topic, type Concept, type Level } from '../api';
import { LEVELS, levelBadgeClass } from './CoursePage';

export function StagePage() {
  const { topicKey, stageIndex } = useParams<{ topicKey: string; stageIndex: string }>();
  const [topic, setTopic] = useState<Topic | null>(null);
  const [level, setLevel] = useState<Level | 'All'>('All');
  const [concepts, setConcepts] = useState<Concept[]>([]);

  useEffect(() => {
    if (!topicKey) return;
    setTopic(null);
    api.getTopic(topicKey).then(setTopic);
  }, [topicKey]);

  useEffect(() => {
    if (!topic) return;
    api.getConcepts({ topic: topic.title, level: level === 'All' ? undefined : level }).then(setConcepts);
  }, [topic, level]);

  if (!topic) return <p>Loading…</p>;

  const stage = topic.roadmap[Number(stageIndex)];

  return (
    <div className="page">
      <Link to={`/topic/${topic.key}`} className="back-link">
        ← {topic.title}
      </Link>
      <header className="course-header">
        <h1>{stage ? stage.stage : topic.title}</h1>
        {stage && <p className="subtitle">{stage.description}</p>}
      </header>

      <div className="level-filter">
        {(['All', ...LEVELS] as const).map((l) => (
          <button key={l} className={level === l ? 'level-chip active' : 'level-chip'} onClick={() => setLevel(l)}>
            {l}
          </button>
        ))}
      </div>

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
    </div>
  );
}
