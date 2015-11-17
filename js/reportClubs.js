var messageClubs = '';
var club;

function print(messageForum) {
  var outputDiv = document.getElementById('outputClubs');
  outputDiv.innerHTML = messageClubs;
}

for (var i = 0; i < clubs.length; i += 1) {
  club = clubs[i];
  messageClubs += '<h2>' + club.Name + '</h2>';
  messageClubs += '<p>' + club.CityStateZip + '</p>';
  messageClubs += '<a href=" http://'+club.Web +'">'+club.Web +'</a>';
}

print(messageClubs)
