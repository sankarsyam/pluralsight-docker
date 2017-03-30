// Sample node.js web app for Pluralsight Docker CI course
// For demonstration purposes only
'use strict';
var port = process.env.PORT || 8080;
var express = require('express'),
    app = express();

app.set('views', 'views');
app.set('view engine', 'jade');

app.get('/', function(req, res) {
    res.render('home', {
  });
});
//added a commet
app.listen(port);
module.exports.getApp = app;