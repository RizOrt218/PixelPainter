//var main = document.getElementById( 'pixelPainter' );

$(function(){

  var colorGrid = $( '<div>' );
  colorGrid
    .addClass( 'colorGrid' )
  ;
  $( 'div#pixelPainter' ).append( colorGrid );

  var starterColors = $( '<div>' );
  starterColors
    .addClass( 'starterColors')
  ;
  $( 'div.colorGrid' ).append( starterColors );

  for ( var i = 1; i <= 10; i++ ) {
    var starterColorBtn = $( '<div>' );
    starterColorBtn
      .addClass( 'starterColorBtn')
    ;
    $( 'div.starterColors' ).append( starterColorBtn );
  }

});