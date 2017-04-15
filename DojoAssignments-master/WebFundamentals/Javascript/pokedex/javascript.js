function pkmn() {
  var img = [];
  var url;
  for(var i = 1; i<=151; i++){
    url = "<img id= "+i+" src='http://pokeapi.co/media/img/"+i+".png'>";
    img.push(url);
  }
  return img;
}

var arr = pkmn();
console.log(arr[0]);
$('.gallery').append(arr[0]);

for(var i = 1; i < arr.length; i++){
  $('.gallery').append(arr[i]);
}
