console.log('this is loaded');

exports.twitterKeys = {
  consumer_key: '<hJmy8HPsUFFe7KuNjnHBphbLt>',
  consumer_secret: '<osLqOLIVoewructmZ4PXwXh7XnE5OKWrHfux7Ax4erU2Ul1qyM>',
  access_token_key: '<889632505229447170-g4GqmDDe7oPPtRg616MdTul1vxKT1mM>',
  access_token_secret: '<MPJXDSX97Hyka4GhLBxgY8mshTQurL04Wn674wqMS2aAW>',
};

var Spotify = require('node-spotify-api');

var spotify = new Spotify({
  id: '<b6e325310eac4ea9a5a87d09617f28e5>',
  secret: '3c2e2d4432894888a27d15c848a7c85e>',
});

spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }

console.log(data);
});
