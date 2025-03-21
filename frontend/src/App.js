import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Correct import
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;