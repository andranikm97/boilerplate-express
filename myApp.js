var express = require('express');
var app = express();

app.use('/public', express.static(__dirname + '/public'))
app.get('/', (req,res) => {
  let absolutePath = __dirname + '/views/index.html';
  res.sendFile(absolutePath);
});

app.get('/json', (req,res) => {
  let message = "Hello json";

  if(process.env.MESSAGE_STYLE === "uppercase") {
    message = "HELLO JSON"
  } 
  
  res.json({"message": message})
});
































module.exports = app;
