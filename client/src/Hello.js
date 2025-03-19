import React, { useState, useEffect } from 'react';

const Hello = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1>{message || 'Loading...'}</h1>
    </div>
  );
};

export default Hello;
