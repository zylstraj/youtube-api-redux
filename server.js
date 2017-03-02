const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

// app.use(express.static('__dirname'));
app.use(express.static(path.join(__dirname, 'app')))
// app.use(express.static(path.join(__dirname, 'build')
// app.use('/build', express.static(path.join(__dirname, 'build')));

app.listen(port);
console.log('Server started');
