const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const dbPath = path.join(__dirname, 'db.json');

// Read existing notes from db.json
const readNotes = () => {
  try {
    const data = fs.readFileSync(dbPath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading db.json:', err);
    return [];
  }
};

app.get('/api/notes', (req, res) => {
  const notes = readNotes();
  res.json(notes);
});

app.post('/api/notes', (req, res) => {
  const notes = readNotes();
  const newNote = req.body;
  newNote.id = notes.length + 1;
  notes.push(newNote);

  try {
    fs.writeFileSync(dbPath, JSON.stringify(notes, null, 2), 'utf8');
    res.status(201).json({ message: 'Note added successfully' });
  } catch (err) {
    console.error('Error writing db.json:', err);
    res.status(500).send('Internal Server Error');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
