var messageTechnical = '';
var technica;

function print(messageForum) {
  var outputDiv = document.getElementById('outputTechnical');
  outputDiv.innerHTML = messageForum;
}

for (var i = 0; i < technical.length; i += 1) {
  technica = technical[i];
  messageTechnical += '<h2>' + technica.Name + '</h2>';
  messageTechnical += '<a href=" http://'+technica.Web +'">'+technica.Web +'</a>';
}

print(messageTechnical)
