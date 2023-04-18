const express = require('express');
const userRouter = require('./routes/userRoutes');
const mongoose = require('mongoose');
const noteRouter = require('./routes/notesRoutes');
const app = express();

app.use(express.json());
app.use('/users', userRouter);
app.use('/notes', noteRouter);

app.get('/', (req, res) => {
    res.send("Akash Singh");
})

mongoose.connect("mongodb+srv://akash:1234@cluster1.seeylhy.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        app.listen(5000, () => {
            console.log("Server started on port 5000 !!");
        })
    })
    .catch((e) => {
        console.log("Error connecting to Database !! " + e);
    })
