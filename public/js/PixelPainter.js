window.onload = function() {

  var newColor;
  var dragColor;
  var stroke = false;
  var strokeArray = [];
  var colorArray = [];


  var main = document.getElementById( 'pixelPainter' );

  //div for color and button
  var leftScreen = document.createElement( 'div' );
    leftScreen.className = 'leftScreen';
    main.appendChild( leftScreen );

  var rightScreen = document.createElement( 'div' );
    rightScreen.className = 'rightScreen';
    main.appendChild( rightScreen );

  var colorGrid = document.createElement( 'div' );
    colorGrid.className = 'colorGrid';
    leftScreen.appendChild( colorGrid );

<<<<<<< HEAD:js/PixelPainter.js
  var swatchLandingArea = document.createElement( 'div');
    swatchLandingArea.className = 'swatchLandingArea';
    colorGrid.appendChild( swatchLandingArea );
=======
  var header = document.createElement( 'h1' );
    header.id = 'header';
    rightScreen.appendChild( header );
    document.getElementById( 'header' ).innerHTML = 'PixelPainter';

>>>>>>> more_css:public/js/PixelPainter.js

//Starter colors on left side
  for( var i = 1; i <= 1; i++ ){
    var starterColors = document.createElement( 'div' );
    starterColors.id = 'starterColors' + i;
    starterColors.className = 'starterColors';
    colorGrid.appendChild( starterColors );

  //Starter color buttons
    for( var j = 1; j <= 10; j++ ){
      var starterColorBtn = document.createElement( 'div' );
      starterColorBtn.id = 'starterColorBtn' + j;
      starterColorBtn.className = 'starterColorBtn';
      starterColors.appendChild( starterColorBtn );


      starterColorBtn.addEventListener( 'click', function() {
        newColor = this.style.background;
        return newColor;
      });
    }

    //===========Red Color Swatch

    var redSwatchRow = document.createElement( 'div' );
    redSwatchRow.className = 'redSwatchRow';
    swatchLandingArea.appendChild( redSwatchRow );

    for( var n = 1; n <= 5; n++ ) {
      var redSwatchBtn = document.createElement( 'div' );
      redSwatchBtn.id = 'redSwatchBtn' + n;
      redSwatchBtn.className = 'redSwatchBtn';
      redSwatchRow.appendChild( redSwatchBtn );

      redSwatchBtn.addEventListener( 'click', function() {
        newColor = this.style.background;
        document.getElementById( 'header' ).style.color = newColor;
        //document.getElementById( 'pixGrid' ).style.color = newColor;
        return newColor;
      });
    }
  }

<<<<<<< HEAD:js/PixelPainter.js
//Color swatch rows
  // for( var m = 1; m <= 1; m++ ) {
  //   var colorSwatchRow = document.createElement( 'div' );
  //   colorSwatchRow.id = 'colorSwatchRow' + m;
  //   colorSwatchRow.className = 'colorSwatchRow';
  //   swatchLandingArea.appendChild( colorSwatchRow );

  //   var redSwatchRow = document.createElement( 'div' );
  //   redSwatchRow.className = 'redSwatchRow';


  //Color swatch buttons

  var pixelGrid = document.createElement( 'div' );
=======
  var pixelGrid = document.createElement( 'table' );
    pixelGrid.id = 'pixGrid';
>>>>>>> more_css:public/js/PixelPainter.js
    pixelGrid.className = 'pixelGrid';
    rightScreen.appendChild( pixelGrid );

  for( var k = 1; k <= 100; k++ ){
    var canvasRow = document.createElement( 'tr' );
    canvasRow.id = 'canvasRow';
    canvasRow.className = 'canvasRow' + k;
    pixelGrid.appendChild( canvasRow );

    for( var p = 1; p <= 100 ; p++ ){
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

  document.getElementById('starterColorBtn1').style.background = '#FF0000';
  document.getElementById('starterColorBtn2').style.background = '#F56905';
  document.getElementById('starterColorBtn3').style.background = '#F5E505';
  document.getElementById('starterColorBtn4').style.background = '#038C05';
  document.getElementById('starterColorBtn5').style.background = '#0034C2';
  document.getElementById('starterColorBtn6').style.background = '#6E00C2';
  document.getElementById('starterColorBtn7').style.background = '#C2009E';
  document.getElementById('starterColorBtn8').style.background = '#5C2B00';
  document.getElementById('starterColorBtn9').style.background = '#000000';
  document.getElementById('starterColorBtn10').style.background = '#FFFFFF';

  document.getElementById('redSwatchBtn1').style.background = '#990000';
  document.getElementById('redSwatchBtn2').style.background = '#cc0000';
  document.getElementById('redSwatchBtn3').style.background = '#ff0000';
  document.getElementById('redSwatchBtn4').style.background = '#ff3333';
  document.getElementById('redSwatchBtn5').style.background = '#ff6666';

  var bgImageArray = ['http://tinyurl.com/ouxd22u', 'http://tinyurl.com/pqlq2kd', 'http://tinyurl.com/nvedvg5' ];

  var imageRow = document.createElement( 'div' );
    imageRow.id = 'imageRow';
    rightScreen.appendChild( imageRow );


    document.getElementById( 'imageRow' ).innerHTML = '<img src="http://tinyurl.com/ouxd22u"/>';


    imageRow.addEventListener('click', function() {
      var string = "url('http://tinyurl.com/ouxd22u')";
      pixelGrid.style.backgroundImage = string;
    });


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


  var copyButton = document.createElement( 'div' );//<------------button element
    copyButton.id = 'copyButton';
    copyButton.className = 'fnButtons';
    funButtons.appendChild( copyButton );
    document.getElementById( 'copyButton').innerHTML = 'Copy';

  var pasteButton = document.createElement( 'div' );//<------------button element
    pasteButton.id = 'pasteButton';
    pasteButton.className = 'fnButtons';
    funButtons.appendChild( pasteButton );
    document.getElementById( 'pasteButton' ).innerHTML = 'Paste';

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
