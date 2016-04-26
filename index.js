var express = require('express');
var app = express();

app.get('/', function (req, res) {
      res.sendFile(process.env.PWD+'/index.html');
});

app.post('/search', function (req, res) {
    res.send("searck");
});

app.get('/info', function (req, res) {
    res.send("info");
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
