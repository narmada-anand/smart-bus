const express = require('express');
const app = express();
const mongoose = require('mongoose');
const parentLoginModel = require('./parentLoginModel');
const busDetailsModel = require('./busDetailsModel');
const bodyParser = require('body-parser');
const path = require('path');

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.listen(process.env.PORT || 5000, () => {
    console.log("server listing to port 5000");
});

mongoose.connect('mongodb://smart-bus:12345678@ds249718.mlab.com:49718/smart-bus').then((data) => {
    console.log('connected to database');
});

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));


app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname, 'public/index.html'));
});

app.get('/', (req, res) => {

    res.send('Home Root');

});