// Function to save a note
const saveNote = (note) =>
  fetch('/api/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(note)
  });

// Function to delete a note
const deleteNote = (id) =>
  fetch(`/api/notes/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });

// Function to get all notes
const getNotes = () =>
  fetch('/api/notes', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });

// Function to render notes in the UI
const renderNotes = (notes) => {
  const notesList = document.getElementById('list-group');
  notesList.innerHTML = '';

  notes.forEach((note) => {
    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item');
    listItem.innerText = note.title;

    listItem.addEventListener('click', () => {
      // Handle click on a note to display it or perform actions
      console.log('Clicked note:', note);
      // You can display the note or perform any action here
    });

    notesList.appendChild(listItem);
  });
};

// Fetch notes when the page loads
document.addEventListener('DOMContentLoaded', () => {
  getNotes()
    .then((response) => response.json())
    .then((notes) => {
      console.log('All notes:', notes);
      renderNotes(notes);
    })
    .catch((error) => {
      console.error('Error fetching notes:', error);
      // Handle error appropriately
    });

  // Example: Save a new note
  const newNote = {
    title: 'Sample Note',
    text: 'This is a sample note content.'
  };

  saveNote(newNote)
    .then((response) => response.json())
    .then((savedNote) => {
      console.log('Saved note:', savedNote);
      // Perform additional actions or update UI as needed
    })
    .catch((error) => {
      console.error('Error saving note:', error);
      // Handle error appropriately
    });

  //  
  const noteIdToDelete = 'your_note_id_here';

  deleteNote(noteIdToDelete)
    .then(() => {
      console.log('Note deleted successfully');
      // Perform additional actions or update UI as needed
    })
    .catch((error) => {
      console.error('Error deleting note:', error);
      // Handle error appropriately
    });
});
