import React from 'react';
import '../styles/ChartsDashboard.css';

function ChartsDashboard() {
  return (
    <div className="charts-dashboard">
      <h2>Progress Over Time</h2>
      <div className="chart-container">
        {/* Placeholder for charts */}
        <p>Mood Trend (Line Chart)</p>
        <p>Sleep & Screen Time (Bar Chart)</p>
        <p>Water Intake (Bubbles or Circles)</p>
      </div>
    </div>
  );
}

export default ChartsDashboard;