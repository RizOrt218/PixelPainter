window.onload = function() {

  var newColor;
  var dragColor;
  var stroke = false;
  var strokeArray = [];
  var colorArray = [];


  var main = document.getElementById( 'pixelPainter' );

  // div for color and button
  var leftScreen = document.createElement( 'div' );
    leftScreen.className = 'leftScreen';
    main.appendChild( leftScreen );

  var rightScreen = document.createElement( 'div' );
    rightScreen.className = 'rightScreen';
    main.appendChild( rightScreen );

  var header = document.createElement( 'h1' );
    header.id = 'header';
    leftScreen.appendChild( header );
    document.getElementById( 'header' ).innerHTML = 'PixelPainter';

//=======================jQuery Color Swatch============================
//================= div for entire color swatch area
  var colorGrid = $( '<div>' );
  colorGrid
    .addClass( 'colorGrid' )
  ;
  $( 'div.leftScreen' ).append( colorGrid );

//================= div for all starting primary colors
  var starterColors = $( '<div>' );
  starterColors
    .addClass( 'starterColors')
  ;
  $( 'div.colorGrid' ).append( starterColors );

//================= div for each starting color button individually
  var colorArr = ['#ff0000', '#ff8000', '#ffff00','#00ff00', '#0000ff', '#7f00ff', '#ff00bf', '#4d2600', '#ffffff', '#000000'];

  for ( var i = 0; i < colorArr.length; i++ ) {
    var starterColorBtn = $( '<div>' ); //createNewElement ('div')
    starterColorBtn
      .addClass( 'starterColorBtn' ) //.className = starterColorBtn
      .css( 'background-color', colorArr[i] )//.style.background = hexcode
      ;
    $( 'div.starterColors' ).append( starterColorBtn ); //appendChild( starterColors )
  }
    $( '.starterColorBtn' ).click( function retreiveColor() { //click fn for individual starting color btn
      var $this = this;
      newColor = $this.style.backgroundColor;
      $( "h1" ).css( "color", newColor );
      console.log(newColor);
      return newColor;
    });

//================= div for color swatch landing area
  var swatchLandingArea = $( '<div>');
  swatchLandingArea
    .addClass( 'swatchLandingArea' )
  ;
  $( 'div.colorGrid' ).append( swatchLandingArea );

//================= Red color swatch
  var redArr = ['#330000', '#660000', '#990000', '#cc0000', '#ff0000', '#ff3333', '#ff6666', '#ff9999'];

  for ( var j = 0; j < redArr.length; j++ ) {
    var redBtn = $( '<div>' );
    redBtn
      .addClass( 'gradientBtn' )
      .css( 'background-color', redArr[j])
    ;
    $( 'div.swatchLandingArea' ).append( redBtn );
  }

//================= Orange color swatch
  var orangeArr = ['#331a00', '#663300', '#994d00', '#cc6600', '#ff8000', '#ff9933', '#ffb366', '#ffcc99'];

  for ( var k = 0; k < orangeArr.length; k++ ) {
    var orangeBtn = $( '<div>' );
    orangeBtn
      .addClass( 'gradientBtn' )
      .css( 'background-color', orangeArr[k])
    ;
    $( 'div.swatchLandingArea' ).append( orangeBtn );
  }

//================= Yellow color swatch
  var yellowArr = ['#333300', '#666600', '#999900', '#cccc00', '#ffff00', '#ffff33', '#ffff66', '#ffff99'];

  for ( var m = 0; m < yellowArr.length; m++ ) {
    var yellowBtn = $( '<div>' );
    yellowBtn
      .addClass( 'gradientBtn' )
      .css( 'background-color', yellowArr[m])
    ;
    $( 'div.swatchLandingArea' ).append( yellowBtn );
  }

//================= Green color swatch
  var greenArr = ['#003300', '#006600', '#009900', '#00cc00', '#00ff00', '#33ff33', '#66ff66', '#99ff99'];

  for ( var n = 0; n < greenArr.length; n++ ) {
    var greenBtn = $( '<div>' );
    greenBtn
      .addClass( 'gradientBtn' )
      .css( 'background-color', greenArr[n])
    ;
    $( 'div.swatchLandingArea' ).append( greenBtn );
  }

//================= Blue color swatch
  var blueaArr = ['#000033', '#000066', '#000099', '#0000cc', '#0000ff', '#3333ff', '#6666ff', '#9999ff'];

  for ( var o = 0; o < blueaArr.length; o++ ) {
    var blueBtn = $( '<div>' );
    blueBtn
      .addClass( 'gradientBtn' )
      .css( 'background-color', blueaArr[o])
    ;
    $( 'div.swatchLandingArea' ).append( blueBtn );
  }

//================= Indigo color swatch
  var indigoArr = ['#190033', '#330066', '#4c0099', '#6600cc', '#7f00ff', '#9933ff', '#b266ff', '#cc99ff'];

  for ( var p = 0; p < indigoArr.length; p++ ) {
    var indigoBtn = $( '<div>' );
    indigoBtn
      .addClass( 'gradientBtn' )
      .css( 'background-color', indigoArr[p])
    ;
    $( 'div.swatchLandingArea' ).append( indigoBtn );
  }

//================= Violet color swatch
  var violetArr = ['#330026', '#66004c', '#990073', '#cc0099', '#ff00bf', '#ff33cc', '#ff66d9', '#ff99e5'];

  for ( var q = 0; q < violetArr.length; q++ ) {
    var violetBtn = $( '<div>' );
    violetBtn
      .addClass( 'gradientBtn' )
      .css( 'background-color', violetArr[q])
    ;
    $( 'div.swatchLandingArea' ).append( violetBtn );
  }

//================= Brown color swatch
  var brownArr = ['#1a0d00', '#331900', '#4d2600', '#663200', '#803f00', '#994c00', '#b35800', '#cc6500'];

  for ( var r = 0; r < brownArr.length; r++ ) {
    var brownBtn = $( '<div>' );
    brownBtn
      .addClass( 'gradientBtn' )
      .css( 'background-color', brownArr[r])
    ;
    $( 'div.swatchLandingArea' ).append( brownBtn );
  }

//================= White color swatch
  var whiteArr = ['#4d4d4d', '#666666', '#808080', '#999999', '#b3b3b3', '#cccccc', '#e6e6e6', '#ffffff'];

  for ( var s = 0; s < whiteArr.length; s++ ) {
    var whiteBtn = $( '<div>' );
    whiteBtn
      .addClass( 'gradientBtn' )
      .css( 'background-color', whiteArr[s])
    ;
    $( 'div.swatchLandingArea' ).append( whiteBtn );
  }

//================= Black color swatch
  var blackArr = ['#0d0d0d', '#262626', '#404040', '#595959', '#737373', '#8c8c8c', '#a6a6a6', '#bfbfbf'];

  for ( var t = 0; t < blackArr.length; t++ ) {
    var blackBtn = $( '<div>' );
    blackBtn
      .addClass( 'gradientBtn' )
      .css( 'background-color', blackArr[t])
    ;
    $( 'div.swatchLandingArea' ).append( blackBtn );
  }

   $( '.gradientBtn' ).click( function () {
      var $this = this;
      newColor = $this.style.backgroundColor;
      $( "h1" ).css( "color", newColor );
      return newColor;
    });
// ========================= end of jQuery

  var pixelGrid = document.createElement( 'table' );
    pixelGrid.id = 'pixGrid';
    pixelGrid.className = 'pixelGrid';
    pixelPainter.appendChild( pixelGrid );

  for( var k = 1; k <= 110; k++ ){
    var canvasRow = document.createElement( 'tr' );
    canvasRow.id = 'canvasRow';
    canvasRow.className = 'canvasRow' + k;
    pixelGrid.appendChild( canvasRow );

    for( var p = 1; p <= 130 ; p++ ){
      var canPixels = document.createElement( 'td' );
      canPixels.id = 'canPixels' + p;
      canPixels.className = 'canPixels';
      canPixels.style.background = '#ffffff';
      canvasRow.appendChild( canPixels );

      //when click current color will appear
      canPixels.addEventListener( 'click', function() {//<---------click fn

        strokeArray.push( this );

        if( stroke === false ){
          stroke = true;
          this.style.background = newColor;
          return stroke;
        } else {
          stroke = false;
          return stroke;
        }
      });

      //when dragged, will appear current color
      canPixels.addEventListener( 'mouseover', function() {
        while( stroke === true ){
          this.style.background = newColor;
          strokeArray.push( this );
        if ( stroke === false );
          return false;
        }
      });
    }
  }

  // var bgImageArray = ['http://tinyurl.com/ouxd22u', 'http://tinyurl.com/pqlq2kd', 'http://tinyurl.com/nvedvg5' ];

  // var imageRow = document.createElement( 'div' );
  //   imageRow.id = 'imageRow';
  //   rightScreen.appendChild( imageRow );


  //   document.getElementById( 'imageRow' ).innerHTML = '<img src="http://tinyurl.com/ouxd22u"/>';


  //   imageRow.addEventListener('click', function() {
  //     var string = "url('http://tinyurl.com/ouxd22u')";
  //     pixelGrid.style.backgroundImage = string;
  //   });

  var funButtons = document.createElement('div');
    funButtons.id = 'funButtons';
    funButtons.className = 'funButtons';
    leftScreen.appendChild(funButtons);

  var eraseBtn = document.createElement('div');
    eraseBtn.id = 'eraseBtn';
    eraseBtn.className = 'fnButtons';
    funButtons.appendChild(eraseBtn);
    document.getElementById( 'eraseBtn' ).innerHTML = 'Erase';

  //document.getElementById('eraseBtn').style.background = 'none';
  eraseBtn.addEventListener('click', function() {
    newColor = this.style.background;
    console.log(newColor);
    return newColor;

  });

  var clearBtn = document.createElement('div');
    clearBtn.id = 'clearBtn';
    clearBtn.className = 'fnButtons';
    funButtons.appendChild(clearBtn);
    document.getElementById( 'clearBtn' ).innerHTML = 'Clear';

  clearBtn.addEventListener('click', function() {
      for( var i = 0; i < strokeArray.length; i++ ){
        strokeArray[i].style.background = '#ffffff';
      }
    });


  // var copyButton = document.createElement( 'div' );//<------------button element
  //   copyButton.id = 'copyButton';
  //   copyButton.className = 'fnButtons';
  //   funButtons.appendChild( copyButton );
  //   document.getElementById( 'copyButton').innerHTML = 'Copy';

  // var pasteButton = document.createElement( 'div' );//<------------button element
  //   pasteButton.id = 'pasteButton';
  //   pasteButton.className = 'fnButtons';
  //   funButtons.appendChild( pasteButton );
  //   document.getElementById( 'pasteButton' ).innerHTML = 'Paste';

  var undoButton = document.createElement( 'div' );//<------------button element
    undoButton.id = 'undoButton';
    undoButton.className = 'fnButtons';
    funButtons.appendChild( undoButton );
    document.getElementById( 'undoButton').innerHTML = 'Undo';

    document.getElementById('undoButton').addEventListener('click',function(){
      // var length = strokeArray.length - 1;
      // console.log(strokeArray);
      // console.log(colorArray);
      // strokeArray[length].style.background = colorArray[length];
      // strokeArray.splice(length,1);
      // colorArray.splice(length,1);


    });
};//end of function
