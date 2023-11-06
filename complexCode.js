/*
   Filename: complexCode.js
   Description: This code is a complex implementation of a web application that allows users to create, edit, and save notes. It utilizes various advanced JavaScript concepts and libraries.
*/

// Import required libraries
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Create express app
const app = express();

// Configuring app middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up MongoDB connection
mongoose.connect('mongodb://localhost/notes_db', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Define note model
const Note = mongoose.model('Note', {
   title: String,
   content: String,
   created_at: { type: Date, default: Date.now },
   updated_at: { type: Date, default: Date.now },
});

// API endpoints
app.get('/api/notes', async (req, res) => {
   try {
      const notes = await Note.find();
      res.json(notes);
   } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
   }
});

app.post('/api/notes', async (req, res) => {
   try {
      const { title, content } = req.body;
      const note = new Note({ title, content });
      await note.save();
      res.json(note);
   } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
   }
});

app.put('/api/notes/:id', async (req, res) => {
   try {
      const { id } = req.params;
      const { title, content } = req.body;
      const note = await Note.findByIdAndUpdate(
         id,
         { title, content, updated_at: Date.now() },
         { new: true }
      );
      res.json(note);
   } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
   }
});

app.delete('/api/notes/:id', async (req, res) => {
   try {
      const { id } = req.params;
      await Note.findByIdAndDelete(id);
      res.json({ message: 'Note deleted successfully' });
   } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
   }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});

// Utility function for generating placeholder data
function generateData() {
   const notes = [
      { title: 'Note 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { title: 'Note 2', content: 'In vel consectetur eros, at rutrum justo.' },
      { title: 'Note 3', content: 'Curabitur pellentesque lacus vel nibh mollis lacinia.' },
      // Generate more notes here...
   ];

   for (let i = 0; i < notes.length; i++) {
      const note = new Note({
         title: notes[i].title,
         content: notes[i].content,
         created_at: new Date(),
      });
      note.save();
   }
}

// Uncomment the line below to generate placeholder data
// generateData();