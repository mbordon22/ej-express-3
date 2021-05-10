const express = require("express");

const app = express();

//1)
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

//2)
app.get("/saludo", function(req, res){
    res.send("Holaaaaa");
});

//3)
app.get("/foto", function(req, res){
    res.sendFile(__dirname + "/imagen1.jpg");
});



app.listen(3000, function(){
    console.log("Desde el puerto 3000...");
});