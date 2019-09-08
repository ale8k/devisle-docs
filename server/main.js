// Importing Packages
const express = require('express');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// Importing and Setting up Mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/devisledocs');

// Importing Routes
const tutorials = require("./routes/tutorials");
const users = require("./routes/users")

// Set basic headers for all requests
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']); // temporary for debugging 
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Main App
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
// app.use(cookieParser());
// app.use(session({secret: "Your secret key"}));

app.use("/tutorials", tutorials);
app.use("/users", users);

app.listen(5000);


