import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api, type Topic } from '../api';

export function Home() {
  const [topics, setTopics] = useState<Topic[]>([]);

  useEffect(() => {
    api.getTopics().then(setTopics);
  }, []);

  return (
    <div className="page">
      <h1>Pick a course</h1>
      <p className="subtitle">
        Recognition = do you understand it when you see it. Recall = can you produce it from memory. Every course
        below tests both.
      </p>
      <div className="course-grid">
        {topics.map((topic) => (
          <Link to={`/topic/${topic.key}`} key={topic._id} className="course-card">
            <h2>{topic.title}</h2>
            <p>{topic.description}</p>
            {topic.isWhiteboard && <span className="pill">whiteboard</span>}
          </Link>
        ))}
      </div>
    </div>
  );
}
