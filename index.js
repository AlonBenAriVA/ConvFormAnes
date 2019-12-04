
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var session = require('express-session');
var logger = require('morgan');
var path = require('path');

// middleware

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(logger("short"));
var publicPath = path.resolve(__dirname, 'public')
app.use(express.static(publicPath));
// initialize our express app


app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
  
});

app.post('/post', function(req, res){
  console.log('post')
  var payload = req.body;
  console.log(payload)
  console.log('This is where the MS SQL piece comes in')
  res.json({"message":"good"})
})

app.get('/home',function(req, res){
  
  res.json({"messge":'Sanity check'})
})



var port = 8000
app.listen(port, function(req,res){
  console.log("Server is listening on port 8000");
});

