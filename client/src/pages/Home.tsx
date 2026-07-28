import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api, type Topic } from '../api';

export function Home() {
  const [topics, setTopics] = useState<Topic[]>([]);

  useEffect(() => {
    api.getTopics().then(setTopics);
  }, []);

  return (
    <div className="landing-page">
      <section className="hero-section">
        <div className="hero-badge">Active Recall & System Design</div>
        <h1 className="hero-title">Recall</h1>
        <p className="hero-tagline">Master core technical concepts through active practice and recall.</p>
      </section>

      <section className="courses-section">
        <div className="section-header">
          <h2>Courses</h2>
          <span className="course-count">{topics.length} Available</span>
        </div>

        <div className="course-list">
          {topics.map((topic) => (
            <Link to={`/topic/${topic.key}`} key={topic._id} className="course-item">
              <div className="course-item-main">
                <div className="course-item-title-row">
                  <h3 className="course-item-title">{topic.title}</h3>
                  {topic.isWhiteboard ? (
                    <span className="pill pill-whiteboard">Whiteboard</span>
                  ) : (
                    <span className="pill pill-quiz">Recall Quiz</span>
                  )}
                </div>
                <p className="course-item-description">{topic.description}</p>
              </div>
              <div className="course-item-action">
                <span className="arrow">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}



