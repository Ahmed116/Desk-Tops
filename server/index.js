const express = require('express');
const path = require('path');
const app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(bodyParser.json());
var items = require('../database-mysql');
var mysql = require('mysql');
var db = require('./../database-mysql/index');
var login = require('./regist');
var add = require('./addaffice');
var getall = require('./getall');
var bookall = require('./bookingall');
var router = express.Router();
const bcrypt = require('bcrypt');
var search = require('./searchbylocation');
var addbooking = require('./rent');
db.connection.connect(function (err) {
  if (err) console.log(err);
  console.log('Connected to dataBase!');
});

app.use(cors());

app.post('/registeruser', login.register);
app.post('/loginuser', login.login);
app.post('/registerowner', login.registerowner);
app.post('/loginowner', login.loginowner);
app.post('/addoffice', add.addoff);
app.get('/getall', getall.getoff);
app.post('/search', search.search);
app.post('/addbooking', addbooking.addbooking);
app.get('/getbooking', bookall.getbooking);

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
