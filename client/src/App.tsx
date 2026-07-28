import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './layout/AppLayout';
import { Home } from './pages/Home';
import { CoursePage } from './pages/CoursePage';
import { StagePage } from './pages/StagePage';
import { TestingPage } from './pages/TestingPage';
import { Assessment } from './pages/Assessment';
import { Whiteboard } from './pages/Whiteboard';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/topic/:topicKey/board/:scenarioId" element={<Whiteboard />} />
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/topic/:topicKey" element={<CoursePage />} />
        <Route path="/topic/:topicKey/stage/:stageIndex" element={<StagePage />} />
        <Route path="/topic/:topicKey/testing" element={<TestingPage />} />
        <Route path="/topic/:topicKey/assess/:conceptId" element={<Assessment />} />
      </Route>
    </Routes>
  );
}

export default App;
