var express = require('express');
var app = express();

app.get("/", function(req, res) {
    res.send("hello world!");
});

app.listen(8080, function() {
    console.log("Express server is running on localhost at port 8080");
    console.log("Point your browser to http://localhost:8080");
});