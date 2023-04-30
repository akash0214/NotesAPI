const express = require('express');
const { getNotes, updateNote, deleteNote, createNote } = require('../controllers/noteController');
const noteRouter = express.Router();
const auth = require("../middlewares/auth");

noteRouter.get('/', auth, getNotes);

noteRouter.post('/', auth, createNote);

noteRouter.put('/:id', auth, updateNote);

noteRouter.delete('/:id', auth, deleteNote);

module.exports = noteRouter;