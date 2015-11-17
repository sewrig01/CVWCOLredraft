
var messageSponsor = '';
var sponsor;

function print(messageSponsor) {
  var outputDiv = document.getElementById('outputSponsors');
  outputDiv.innerHTML = messageSponsor;
}

for (var i = 0; i < sponsors.length; i += 1) {
  sponsor = sponsors[i];
  messageSponsor += '<h2>' + sponsor.Name + '</h2>';
  messageSponsor += '<p>' + sponsor.Street + '</p>';
  messageSponsor += '<p>' + sponsor.CityStateZip + '</p>';
  messageSponsor += '<p>' + sponsor.Phone + '</p>';
  messageSponsor += '<a href=" http://'+sponsor.Web +'">'+sponsor.Web +'</a>';
  messageSponsor += '<p></p><a href=" mailto:'+sponsor.Email +'">'+sponsor.Email +'</a>';
}

print(messageSponsor)
