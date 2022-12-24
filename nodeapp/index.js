var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello, If you look at what you don't have in life, you'll never have enough." }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello World" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
