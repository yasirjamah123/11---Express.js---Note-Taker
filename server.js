const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Placeholder database (replace this with a proper database setup)
let notes = [];

// Serve static files (HTML, CSS, JavaScript)
app.use(express.static('public'));

// Get all notes
app.get('/api/notes', (req, res) => {
  res.json(notes);
});

// Save a note
app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  newNote.id = generateId(); // Replace generateId() with your unique ID generation logic
  notes.push(newNote);
  res.status(201).json(newNote);
});

// Delete a note
app.delete('/api/notes/:id', (req, res) => {
  const noteId = req.params.id;
  notes = notes.filter((note) => note.id !== noteId);
  res.sendStatus(200);
});

// Generate a unique ID (replace this with your unique ID generation logic)
function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
