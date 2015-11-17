var messageshopPart = '';
var shopPart;

function print(messageshopPart) {
  var outputDiv = document.getElementById('outputshopParts');
  outputDiv.innerHTML = messageshopPart;
}

for (var i = 0; i < shopParts.length; i += 1) {
  shopPart = shopParts[i];
  messageshopPart += '<h2>' + shopPart.Name + '</h2>';
  messageshopPart += '<p>' + shopPart.Street + '</p>';
  messageshopPart += '<p>' + shopPart.CityStateZip + '</p>';
  messageshopPart += '<p>' + shopPart.Phone + '</p>';
  messageshopPart += '<a href=" http://'+shopPart.Web +'">'+shopPart.Web +'</a>';
  messageshopPart +=  '<p></p><a href=" mailto:'+shopPart.Email +'">'+shopPart.Email +'</a>';
}

print(messageshopPart)
