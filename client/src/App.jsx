import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [message, setMessage] = useState('Loading...');

  React.useEffect(() => {
    fetch('/api/health')
      .then(r => r.json())
      .then(data => setMessage(data.status))
      .catch(err => setMessage('Error: ' + err.message));
  }, []);

  return (
    <div className="app-container">
      <h1>🎓 ShopDeck FOS Bootcamp LMS</h1>
      <p>Status: {message}</p>
    </div>
  );
}
