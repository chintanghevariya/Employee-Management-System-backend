const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const empRouter = require("./routes/EmpRoutes");

const DB_URL ="mongodb+srv://chintan:Chintan123@comp3123.xcrku.mongodb.net/101236361_assignment2?retryWrites=true&w=majority"

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.Promise = global.Promise;

// TODO - Update your mongoDB Atals Url here to Connect to the database
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.send("<h1>Assignment 2</h1>");
});

app.use(empRouter);

app.listen(9000, () => {
    console.log("Server is listening on port 9000");
});