var express = require('express');
var app = express();

// 1.) Meet the Node console
console.log('Hello World');

// 2.) Start a Working Express Server
/* app.get('/', (req, res) => {
	res.send('Hello Express');
}); */

// 3.) Serve an HTML File
const indexView = __dirname + '/views/index.html';
app.get('/', (req, res) => {
	res.sendFile(indexView);
});

// 4.) Serve Static Assets


























 module.exports = app;
