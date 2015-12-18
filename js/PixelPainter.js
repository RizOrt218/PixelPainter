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

  var colors = document.createElement( 'div' );
    colors.className = 'colorGrid';
    leftScreen.appendChild( colors );

//color swatches row
  for( var i = 1; i <= 12; i++ ){
    var colorRow = document.createElement( 'div' );
    colorRow.id = 'colorRow' + i;
    colorRow.className = 'colorRow';
    colors.appendChild( colorRow );

  //color swatches
    for( var j = 1; j <= 6; j++ ){
      var colorBtn = document.createElement( 'div' );
      colorBtn.id = 'colorBtn' + j;
      colorBtn.className = 'colorBtn';
      colorRow.appendChild( colorBtn );

      colorBtn.addEventListener( 'click', function() {
        newColor = this.style.background;
        return newColor;
      });
    }
  }

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

  document.getElementById('colorBtn1').style.background = 'red';
  document.getElementById('colorBtn2').style.background = 'orange';
  document.getElementById('colorBtn3').style.background = 'blue';
  document.getElementById('colorBtn4').style.background = 'pink';
  document.getElementById('colorBtn5').style.background = 'green';
  document.getElementById('colorBtn6').style.background = 'purple';


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
