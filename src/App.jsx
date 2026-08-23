import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import ResearchPage from './pages/ResearchPage';
import MediaPage from './pages/MediaPage';
import AwardsPage from './pages/AwardsPage';
import TravelPage from './pages/TravelPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/research" replace />} />
        <Route path="research" element={<ResearchPage />} />
        <Route path="media" element={<MediaPage />} />
        <Route path="awards" element={<AwardsPage />} />
        <Route path="travel" element={<TravelPage />} />
        <Route path="*" element={<Navigate to="/research" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
