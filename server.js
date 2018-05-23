var express = require('express');
var app = require("express")();
var http = require('http').Server(app);
var fs = require('fs');
 const bodyParser = require('body-parser');

  //body parser middleware
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + 'images'));
app.use(express.static(__dirname + 'jsfiles'));
app.use(express.static(__dirname + '/styles'));
app.use(express.static(__dirname + 'phpfiles'));
app.get('/',function(req,res){
    res.sendfile('index.html');
});
http.listen(process.env.PORT || 8082,function(){
    console.log("The server started.");
})
