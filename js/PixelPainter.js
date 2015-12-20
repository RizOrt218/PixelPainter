  // function PixelPainter ( name ){
  //   this._name = name;
  // }

  // function ColorSwatch ( height, width ){
  //   this._height = height;
  //   this._width = width;

  //   []

  //   this.swatch = new ColorBtn();


  // }

  // ColorSwatch.prototype = Object.create( PixelPainter.prototype );

  // function ColorBtn ( color ){
  //   this._color = color;

  //   var colors = []

  // }

  // ColorBtn.prototype = Object.create( ColorSwatch.prototype );

  //create function to show default color swatch

window.onload = function() {

  var newColor;
  var dragColor;
  var stroke = false;
  var undoArr = [];

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

  var swatchLandingArea = document.createElement( 'div');
    swatchLandingArea.className = 'swatchLandingArea';
    colorGrid.appendChild( swatchLandingArea );

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
        return newColor;
      });
    }
  }

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
    pixelGrid.className = 'pixelGrid';
    rightScreen.appendChild( pixelGrid );

  for( var k = 1; k <= 75; k++ ){
    var canvasRow = document.createElement( 'div' );
    canvasRow.id = 'canvasRow';
    canvasRow.className = 'canvasRow' + k;
    pixelGrid.appendChild( canvasRow );

    for( var p = 1; p <= 80 ; p++ ){
      var canPixels = document.createElement( 'div' );
      canPixels.id = 'canPixels' + p;
      canPixels.className = 'canPixels';
      canvasRow.appendChild( canPixels );

      //when click current color will appear
      canPixels.addEventListener( 'click', function() {//<---------click fn

        if( dragColor === this.style.background ){
          dragColor = !newColor;
          return dragColor;
        }
        //undoArr.push( canPixels );
        this.style.background = newColor;
        dragColor = newColor;
        return dragColor;


        //returns stroke to true while pushing canPixels to undoArr
        // if( stroke === false ){
        //   stroke = true;
        //   console.log( undoArr );
        //   console.log( stroke );
        //   return stroke;
        // } else {
        //   stroke = false;
        //   console.log( stroke );
        //   return stroke;
        // }

      });

      //when dragged, will appear current color
      canPixels.addEventListener( 'mouseover', function() {
        this.style.background = dragColor;

        // while( stroke === true ){
        //   undoArr.push( canPixels );
        //   console.log( undoArr );
        // }

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


  var funButtons = document.createElement('div');
    funButtons.className = 'funButtons';
    leftScreen.appendChild(funButtons);

  var eraseBtn = document.createElement('div');
    eraseBtn.id = 'eraseBtn';
    eraseBtn.className = 'fnButtons';
    funButtons.appendChild(eraseBtn);
    document.getElementById( 'eraseBtn').innerHTML = 'Erase';

  //document.getElementById('eraseBtn').style.background = 'none';
  eraseBtn.addEventListener('click', function(){
    newColor = this.style.background;
    console.log(newColor);
    return newColor;

  });

  var clearBtn = document.createElement('div');
    clearBtn.id = 'clearBtn';
    clearBtn.className = 'fnButtons';
    funButtons.appendChild(clearBtn);
    document.getElementById( 'clearBtn').innerHTML = 'Clear';

  clearBtn.addEventListener('click', function(){
      var wholeGrid = canPixels;
      wholeGrid.style.background = '#ffffff';
      console.log(canPixels[p].style.background);
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
};//end of function
