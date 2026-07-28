import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';

const STORAGE_KEY = 'recall.sidebar-collapsed';

export function AppLayout() {
  const [collapsed, setCollapsed] = useState(() => localStorage.getItem(STORAGE_KEY) === '1');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, collapsed ? '1' : '0');
  }, [collapsed]);

  return (
    <div className="app-layout">
      {collapsed && (
        <button className="sidebar-toggle" onClick={() => setCollapsed(false)} aria-label="Show navigation">
          ☰
        </button>
      )}
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((c) => !c)} />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
