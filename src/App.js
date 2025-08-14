// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Reception from './pages/ReceptionPage';
import ScanRoom from './pages/ScanRoomPage';
import TVDisplay from './pages/TVDisplayPage';

function AppContent() {
  const location = useLocation();
  const isTVPage = location.pathname === '/tvdisplay';

  return (
    <>
      <Header hideable={isTVPage} />
      <div className="pt-20 px-4">
        <Routes>
          <Route path="/reception" element={<Reception />} />
          <Route path="/scanroom" element={<ScanRoom />} />
          <Route path="/tvdisplay" element={<TVDisplay />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
