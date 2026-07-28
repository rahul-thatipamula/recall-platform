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

  return (
    <aside className={collapsed ? 'sidebar collapsed' : 'sidebar'} aria-hidden={collapsed}>
      <div className="sidebar-inner">
        <div className="sidebar-brand">
          <NavLink to="/">Recall</NavLink>
          <button className="sidebar-toggle with-sidebar" onClick={onToggle} aria-label="Hide navigation">
            ✕
          </button>
        </div>
        <ul className="sidebar-nav">
          {topics.map((topic) => (
            <li key={topic._id}>
              <NavLink to={`/topic/${topic.key}`} className={({ isActive }) => (isActive ? 'active' : '')}>
                <span className="nav-title">{topic.title}</span>
                {topic.isWhiteboard && <span className="pill">board</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

