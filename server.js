'use strict';

var express = require('express');
var app = express();
var request = require('superagent');

app.get('/current/:city', function(req, res) {
  var requestURL = 'http://api.wunderground.com/api/' + process.env.WUNDERAPI + '/conditions/q/' + req.params.city + '.json';
  console.log(requestURL);
  var conditions = '';
  request
    .get(requestURL)
    .end(function(res){
      console.log(res);
      conditions = res;
    });
  res.json(conditions);
});

var server = app.listen(process.env.PORT || 3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Wunderground example app listening at http://%s:%s', host, port);
});
