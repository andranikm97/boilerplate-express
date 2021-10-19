var express = require('express');
var app = express();

app.use('/public', express.static(__dirname + '/public'))
app.use('/', (req,res,next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.get('/', (req,res) => {
  let absolutePath = __dirname + '/views/index.html';
  res.sendFile(absolutePath);
});

app.get('/:word/echo', (req,res) => {
  let word = req.params.word;
  console.log(word)
  res.json({echo: word})
});

app.get('/now', (req,res,next) => {
  req.time = new Date().toString();
  next();
}, (req,res) => {
  res.json({time: req.time});
});


app.get('/json', (req,res) => {
  let message = "Hello json";

  if(process.env.MESSAGE_STYLE === "uppercase") {
    message = "HELLO JSON"
  } 
  
  res.json({"message": message})
});
































module.exports = app;
