// express code for setting up express server Davis Silva

const express = require('express');
const app = express();

app.get('/', function(req, res){
  res.status(200).send)('Hello world');
});

const PORT = process.env.HTTP_PORT || 3000;
const APPLICATION_NAME = process.env.APPLICATION_NAME || '';

app.listen(PORT, function(){
  console.log('Application ' + APPLICATION_NAME + ', listening on port:' + PORT);
});

var Twitter = require('twitter');

// for user based authentication:
// var client = new Twitter({
//   consumer_key: process.env.TWITTER_CONSUMER_KEY,
//   consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
//   access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
//   access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
// });
//
// var params = {screen_name: 'nodejs'};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     console.log(tweets);
//   }
// });

// application only based authentication
var path = require('path');

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  bearer_token: process.env.TWITTER_BEARER_TOKEN
});

client.get(path, params, callback);
client.post(path, params, callback);
client.stream(path, params, callback);

//REST API

client.get('favorites/list', function(error, tweets, response) {
  if(error) throw error;
  console.log(tweets); // tweet body
  console.log(response); // raw response object
})
