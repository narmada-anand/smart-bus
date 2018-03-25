const express = require('express');
const app = express();
const mongoose = require('mongoose');
const parentLoginModel = require('./parentLoginModel');
const adminLoginModel = require('./adminLoginModel');
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


app.post('/adminLogin', (req, res) => {
    console.log(req.body.loginName);
    adminLoginModel.find({ 'loginName': req.body.loginName, 'password': req.body.password }).then((data) => {
        console.log("xxx", data);
        if (data.length > 0) {
            res.send({ "Status": "success", "session": data });
        }
        else
            res.send({ "Status": "failed" });
    });
});

app.post('/loginApp',(req,res)=> {
res.send(req.body);
});
app.post('/sampleAPI',(req,res)=> {
    res.send({'status': 'ok'});
    });