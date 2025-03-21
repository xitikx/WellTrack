import React from 'react';
import MoodSelector from '../components/MoodSelector'; // Test with one component
import ChartsDashboard from "../components/ChartsDashboard";
import SleepSlider from "../components/SleepSlider";
import WaterTracker from "../components/WaterTracker";
import '../styles/Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Daily Wellness Dashboard</h1>
      <div className="input-section">
        <MoodSelector /> {/* Test with one component */}
        <ChartsDashboard />
        <SleepSlider />
        <WaterTracker />
      </div>
    </div>
  );
}

export default Dashboard;