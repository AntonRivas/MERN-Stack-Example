var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello world! Beep Boop");
});

app.listen(8080);
