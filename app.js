const express = require('express');
const path = require('path'); // To help resolve file paths
const app = express();
const port = 3001;

// Serve the static files from the React build directory
app.use(express.static(path.join(__dirname, 'client/build')));

// API route to test from React
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Node.js backend!' });
});

// Catch-all handler for any requests not handled by the API (to serve React pages)
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
