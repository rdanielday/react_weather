var express = require("express");

// create our app

var app = express();

app.use(express.static("public"));

app.listen(process.env.PORT, process.env.IP, function () {
    console.log("Server has started..............");
});
