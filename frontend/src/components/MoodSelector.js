import React from 'react';
import '../styles/MoodSelector.css';

function MoodSelector() {
  return (
    <div className="mood-selector">
      <h3>Mood Today?</h3>
      <div className="mood-options">
        <button>🙂</button>
        <button>😐</button>
        <button>😢</button>
        <button>😠</button>
        <button>🤩</button>
      </div>
    </div>
  );
}

export default MoodSelector;