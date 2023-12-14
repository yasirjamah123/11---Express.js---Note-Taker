document.addEventListener('DOMContentLoaded', () => {
  const noteList = document.querySelector('#list-group');
  const noteTitle = document.querySelector('.note-title');
  const noteText = document.querySelector('.note-textarea');

  const renderNoteList = (notes) => {
    // Implementation of renderNoteList function...
  };

  const fetchNotes = () => {
    // Implementation of fetchNotes function...
  };

  const saveNote = () => {
    console.log('Save Note button clicked'); // Log to check if the button click is detected

    const newNote = {
      title: noteTitle.value,
      text: noteText.value,
    };

    console.log('New note data:', newNote); // Log the new note data before sending the request

    fetch('http://localhost:3000/api/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newNote), // Correctly passing newNote to JSON.stringify
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response
      })
      .catch((error) => console.error('Error saving note:', error));
  };

  const saveNoteBtn = document.querySelector('.save-note');
  if (saveNoteBtn) {
    console.log('Save Note button found'); // Log to check if the button is found

    saveNoteBtn.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default form submission
      console.log('Save Note button event listener triggered'); // Log to check if the event listener is activated
      saveNote();
    });
  } else {
    console.log('Save Note button not found'); // Log if the button is not found
  }

  const newNoteBtn = document.querySelector('.new-note');
  const clearBtn = document.querySelector('.clear-btn');

  newNoteBtn.addEventListener('click', () => {
    noteTitle.value = '';
    noteText.value = '';
  });

  fetchNotes();
});
