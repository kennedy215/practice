$("#blink").click(function(){
    $( "h1" ).hide( "slow" );
});
$("#blink").click(function(){
    $("#blinkingtext").show( "slow" );
});

$("#toggle").click(function(){
    $("#toggleText").toggle();
});

$("#slide").click(function(){
    $("#birdperson").slideUp();
});

$("#slide").click(function(){
    $("#birdperson").slideDown();
});

$("#Fade").click(function(){
    $("#birdperson").fadeOut();
});

$("#Fade").click(function(){
    $("#birdperson").fadeIn();
});


$("h1").click(function() {
    $(this).addClass("purple");
});

$("#buttonAppear").click(function (){
    $("#buttonAppear").after("<button id='buttonception'>buttonception</button>");// single quotation
    $("#buttonception").click(function(){
        $("#birdperson").before("<img src='https://i.ytimg.com/vi/WEsqSJLeeDc/hqdefault.jpg'>");
        $("#birdperson").after("<img id='Rick' src='https://media0.giphy.com/media/mR3FqAStFhyiQ/200_s.gif'>");

        $("#rick").click(function() {
            $(this).append("<img id='morty' src='http://vignette3.wikia.nocookie.net/rickandmorty/images/c/ce/MortyTransparent.png/revision/latest?cb=20160909031949'>");
        });
        // $("#birdperson").before("rickety wrecked");
        // $("#birdperson").after("rickety wrecked");
        // $("#toggleText").toggle();
    });
});

$("#birdperson").click(function() {
    $(".trip").append("<img src='http://orig15.deviantart.net/80e2/f/2008/287/5/9/hypnotoad__trace_vector_by_chaossity.png'>");
});

$("h1").click(function () {
    var string = $(this).html();
    $(this).text(string);
});


$("#test").click(function () {
    var obeyNow = $("#Fade").attr("hiddenmsg");
    $("#obey").text(obeyNow);
});

var title = $( "em" ).attr( "title" );
$( "div" ).text( title );

$("#valButton").click(function () {
    var valtext = $("h1").val();
    alert(valtext);
});

$( "#weretired" ).data( "test", { msg1: "All hail", msg2: "Hypnotoad!" } );
$( "span:first" ).text( $( "#weretired" ).data( "test" ).msg1 );
$( "span:last" ).text( $( "#weretired" ).data( "test" ).msg2 );
$( "button" ).click(function() {
  var str = $( this ).text();
  $( "input" ).val( str );
});
