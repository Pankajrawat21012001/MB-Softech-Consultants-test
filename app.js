//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const homeStartingContent = "We make sure you do not miss any interesting topics or news going around you. Get Latest news updates and breaking news alerts from India.";


let news=[];

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){
  res.sendFile(__dirname+'/index.html');
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
