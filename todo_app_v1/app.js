var express = require("express");
var app = express();
var mongoose = require('mongoose');
var config = require('./config')
var setUpController = require("./controllers/setUpController")
var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

mongoose.connect(config.dbConnectionString(), { useNewUrlParser: true });
mongoose.connection.on('error', (err) => {
  console.log("DB Connection Error!!!");
  console.log(err);
});
mongoose.connection.on('connected', () => {
  console.log('DB Connection Success!!!');
});

setUpController(app);
app.listen(port);