import React from 'react';
import '../styles/WaterTracker.css';

function WaterTracker() {
  return (
    <div className="water-tracker">
      <h3>Water Intake:</h3>
      <div className="glasses">
        <button>💧</button>
        <button>💧</button>
        <button>💧</button>
        <button>💧</button>
        <button>💧</button>
      </div>
    </div>
  );
}

export default WaterTracker;