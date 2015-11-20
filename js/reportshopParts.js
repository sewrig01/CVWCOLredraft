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
  messageshopPart += '<a href="tel:' + shopPart.Phone +'">'+ shopPart.Phone +'</a><p></p>';
  messageshopPart += '<a href=" http://'+shopPart.Web +'">'+shopPart.Web +'</a>';
  messageshopPart += '<a href=" mailto:'+shopPart.Email +'">'+shopPart.Email +'</a>';
}

print(messageshopPart)
