const express = require('express');
const noteRouter = express.Router();

noteRouter.get('/', (req, res) => {
    res.send("Notes get request !!");
})

noteRouter.post('/', (req, res) => {
    res.send("Notes post request !!");
})

module.exports = noteRouter;