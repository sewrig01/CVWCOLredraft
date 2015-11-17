var messageForum = '';
var forum;

function print(messageForum) {
  var outputDiv = document.getElementById('outputForums');
  outputDiv.innerHTML = messageForum;
}

for (var i = 0; i < forums.length; i += 1) {
  forum = forums[i];
  messageForum += '<h2>' + forum.Name + '</h2>';
  messageForum += '<a href=" http://'+forum.Web +'">'+forum.Web +'</a>';
}

print(messageForum)
