import React from 'react';
import '../styles/SleepSlider.css';

function SleepSlider() {
  return (
    <div className="sleep-slider">
      <h3>Sleep (Hours):</h3>
      <input type="range" min="0" max="12" defaultValue="7" />
    </div>
  );
}

export default SleepSlider;