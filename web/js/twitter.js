const Twit = require('twit');

const apikey = 'ef2X0bhgXfjL1KnROvL8ggk2X'
const apiSecretKey = 'UcNyWu8R855ycU3vBVf61IzziGs8R806ZUpjjK6xYJXHAdDBOh'
const accessToken = '1325873651074404358-9Rwg6SiVKP3S1EW2AJrRgdAZK9gGKq'
const accessTokenSecret = 'xZa4igeXVEB24LO9NRa5TN1ZqE1lhODbqMTdIohHS2Q0u'

var T = new Twit({
  consumer_key:         apikey,
  consumer_secret:      apiSecretKey,
  access_token:         accessToken,
  access_token_secret:  accessTokenSecret,
});


function twitt(){
  var twitt = document.getElementById("twitt").value;
  //2. REAL TIME MONITORING USING STREAM (HASHTAG)
  trak = '#'+twitt;
  var stream = T.stream('statuses/filter', { track: trak })
  stream.on('tweet', function (tweet) {
      console.log(tweet.text);
      console.log('Language: ' + franc(tweet.text));
      console.log('------');
  });
}

document.addEventListener("DOMContentLoaded", main);
