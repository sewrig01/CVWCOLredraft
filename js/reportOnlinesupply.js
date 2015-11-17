var messageOnlinesupply = '';
var onlinesuppl;

function print(messageForum) {
  var outputDiv = document.getElementById('outputOnlinesupply');
  outputDiv.innerHTML = messageForum;
}

for (var i = 0; i < onlinesupply.length; i += 1) {
  onlinesuppl = onlinesupply[i];
  messageOnlinesupply += '<h2>' + onlinesuppl.Name + '</h2>';
  messageOnlinesupply += '<a href=" http://'+onlinesuppl.Web +'">'+onlinesuppl.Web +'</a>';
}

print(messageOnlinesupply)
