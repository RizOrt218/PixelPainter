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

  var header = document.createElement( 'h1' );
    header.id = 'header';
    rightScreen.appendChild( header );
    document.getElementById( 'header' ).innerHTML = 'PixelPainter';


//Starter colors on left side
  for( var i = 1; i <= 1; i++ ){
    var starterColors = document.createElement( 'div' );
    starterColors.id = 'starterColors' + i;
    starterColors.className = 'starterColors';
    colorGrid.appendChild( starterColors );

  //color swatches
    for( var j = 1; j <= 10; j++ ){
      var colorBtn = document.createElement( 'div' );
      colorBtn.id = 'colorBtn' + j;
      colorBtn.className = 'colorBtn';
      starterColors.appendChild( colorBtn );

      colorBtn.addEventListener( 'click', function() {
        newColor = this.style.background;
        document.getElementById( 'header' ).style.color = newColor;
        document.getElementById( 'pixGrid' ).style.color = newColor;
        return newColor;
      });
    }
  }

  var pixelGrid = document.createElement( 'table' );
    pixelGrid.id = 'pixGrid';
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

  document.getElementById('colorBtn1').style.background = '#FF0000';
  document.getElementById('colorBtn2').style.background = '#F56905';
  document.getElementById('colorBtn3').style.background = '#F5E505';
  document.getElementById('colorBtn4').style.background = '#038C05';
  document.getElementById('colorBtn5').style.background = '#0034C2';
  document.getElementById('colorBtn6').style.background = '#6E00C2';
  document.getElementById('colorBtn7').style.background = '#C2009E';
  document.getElementById('colorBtn8').style.background = '#5C2B00';
  document.getElementById('colorBtn9').style.background = '#000000';
  document.getElementById('colorBtn10').style.background = '#FFFFFF';

  var bgImageArray = [ 'http://tinyurl.com/ouxd22u', 'http://tinyurl.com/pqlq2kd', 'http://tinyurl.com/nvedvg5' ];

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
