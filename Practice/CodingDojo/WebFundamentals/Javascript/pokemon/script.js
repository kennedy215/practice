// alert("IT WORKS!");

// function pokemon(){
//   var img = [];
//   var name =
//     for(var i = 1; i<= 151; i++){
//       <img src="http://pokeapi.co/media/img/)+[i]+".png>"
//        arr.push(i);
//
//  for loop
//       body() push link


function pkmn() {
  var img = [];
  var url;
  for(var i = 1; i<=151; i++){
    url = "<img src='http://pokeapi.co/media/img/"+i+".png'>";
    img.push(url);
  }
  return img;
}

var arr = pkmn();
console.log(arr[0]);
$('body').append(arr[0]);

for(var i = 1; i < arr.length; i++){
  $('body').append(arr[i]);
}
