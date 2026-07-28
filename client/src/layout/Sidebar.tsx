import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { api, type Topic } from '../api';

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const [topics, setTopics] = useState<Topic[]>([]);

  useEffect(() => {
    api.getTopics().then(setTopics);
  }, []);

  const frontendKeys = ['html', 'css', 'bootstrap', 'javascript', 'dom', 'jquery'];
  const backendKeys = ['java', 'spring-boot', 'sql', 'redis', 'kafka', 'aws'];
  const practiceKeys = ['behavioral', 'system-design'];

  const frontendTopics = topics.filter((t) => frontendKeys.includes(t.key));
  const backendTopics = topics.filter((t) => backendKeys.includes(t.key));
  const practiceTopics = topics.filter((t) => practiceKeys.includes(t.key));
  const otherTopics = topics.filter(
    (t) => !frontendKeys.includes(t.key) && !backendKeys.includes(t.key) && !practiceKeys.includes(t.key)
  );

  return (
    <aside className={collapsed ? 'sidebar collapsed' : 'sidebar'} aria-hidden={collapsed}>
      <div className="sidebar-inner">
        <div className="sidebar-brand">
          <NavLink to="/">Recall</NavLink>
          <button className="sidebar-toggle with-sidebar" onClick={onToggle} aria-label="Hide navigation">
            ✕
          </button>
        </div>

        {frontendTopics.length > 0 && (
          <div className="sidebar-section">
            <div className="sidebar-section-title">Web & UI</div>
            <ul className="sidebar-nav">
              {frontendTopics.map((topic) => (
                <li key={topic._id}>
                  <NavLink to={`/topic/${topic.key}`} className={({ isActive }) => (isActive ? 'active' : '')}>
                    <span className="nav-title">{topic.title}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}

        {backendTopics.length > 0 && (
          <div className="sidebar-section">
            <div className="sidebar-section-title">Backend & Cloud</div>
            <ul className="sidebar-nav">
              {backendTopics.map((topic) => (
                <li key={topic._id}>
                  <NavLink to={`/topic/${topic.key}`} className={({ isActive }) => (isActive ? 'active' : '')}>
                    <span className="nav-title">{topic.title}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}

        {(practiceTopics.length > 0 || otherTopics.length > 0) && (
          <div className="sidebar-section">
            <div className="sidebar-section-title">Practice & Design</div>
            <ul className="sidebar-nav">
              {[...practiceTopics, ...otherTopics].map((topic) => (
                <li key={topic._id}>
                  <NavLink to={`/topic/${topic.key}`} className={({ isActive }) => (isActive ? 'active' : '')}>
                    <span className="nav-title">{topic.title}</span>
                    {topic.isWhiteboard && <span className="pill">board</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </aside>
  );
}


