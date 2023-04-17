const express = require('express');
const quotes = require('./quotes.json');
const app = express();

app.get('/', (req, res) => {
    res.send("Akash Singh");
})

app.get('/quotes', (req, res) => {
    res.status(200).json(quotes);
})

app.get('/random', (req, res) => {
    let index = Math.floor(Math.random() * quotes.length);
    let quote = quotes[index];
    res.status(200).json(quote);
})

app.listen(5000, () =>{
    console.log("Server started on port 5000 !!");
})