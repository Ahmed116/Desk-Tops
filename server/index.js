const express = require('express');
const path = require('path');
const app = express();
const mysql = require('mysql');
const bcrypt = require('bcrypt');

// app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
