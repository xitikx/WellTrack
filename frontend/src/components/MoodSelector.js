import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/MoodSelector.css';

function MoodSelector() {
  const [selectedMood, setSelectedMood] = useState(null);

  // List of mood options with emojis
  const moods = [
    { emoji: '🙂', label: 'Happy' },
    { emoji: '😐', label: 'Neutral' },
    { emoji: '😢', label: 'Sad' },
    { emoji: '😡', label: 'Angry' }, // Updated to red angry emoji
    { emoji: '🤩', label: 'Excited' },
    { emoji: '😴', label: 'Tired' },
    { emoji: '😍', label: 'Loved' },
    { emoji: '🤔', label: 'Thoughtful' },
  ];

  // Function to handle mood selection
  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    console.log('Selected Mood:', mood); // For debugging
  };

  // Handle keyboard events
  const handleKeyDown = (event, mood) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleMoodSelect(mood);
    }
  };

  return (
    <div className="mood-selector">
      <h3>Mood Today?</h3>
      <div className="mood-options">
        {moods.map((mood, index) => (
          <motion.button
            key={index}
            className={`mood-button ${selectedMood === mood.label ? 'selected' : ''}`}
            onClick={() => handleMoodSelect(mood.label)}
            onKeyDown={(e) => handleKeyDown(e, mood.label)}
            aria-label={mood.label}
            tabIndex={0}
            title={mood.label}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {mood.emoji}
          </motion.button>
        ))}
      </div>
      {selectedMood && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          You're feeling <strong>{selectedMood}</strong> today!
        </motion.p>
      )}
    </div>
  );
}

export default MoodSelector;