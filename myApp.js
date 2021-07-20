var express = require('express');
var app = express();

// 7) Implement a Root-Level Request Logger Middleware
app.use((req, res, next) => {
	console.log(req.method + ' ' + req.path + ' - ' + req.ip);
	next();
})

// 1.) Meet the Node console
console.log('Hello World');

// 2.) Start a Working Express Server
/* app.get('/', (req, res) => {
	res.send('Hello Express');
}); */

// 3.) Serve an HTML File
//const indexView = __dirname + '/views/index.html';
/* app.get('/', (req, res) => {
	res.sendFile(__dirname + '/views/index.html');
}); */

// 4.) Serve Static Assets
app.use('/public', express.static(__dirname + '/public'));
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/views/index.html');
});

// 5.) Serve JSON on a Specific Route
/* app.get('/json', (req, res) => {{
	res.json({message: "Hello json"});
}}); */

// 6.) Use the .env File
app.get('/json', (req, res) => {{
	if(process.env.MESSAGE_STYLE === 'uppercase') {
		res.json({message: "HELLO JSON"});
	}
	res.json({message: "Hello json"});
}});










 module.exports = app;
