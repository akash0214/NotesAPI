const noteModel = require('../models/notesModel');

const createNote = async(req, res) => {
    const {title, description} = req.body;
    const newNote = new noteModel({
        title: title,
        description: description,
        userId: req.userId,
    });
    try {
        await newNote.save();
        res.status(201).json(newNote);
    } catch (error) {
        res.status(500).json({message: "Something went wrong !!"});
    }
}
const getNotes = (req, res) => {
    
}
const updateNote = (req, res) => {
    
}
const deleteNote = (req, res) => {
    
}
module.exports = {createNote, getNotes, updateNote, deleteNote}