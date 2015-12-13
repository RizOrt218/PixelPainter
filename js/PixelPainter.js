


  function PixelPainter ( name ){
    this._name = name;
  }

  function ColorSwatch ( height, width ){
    this._height = height;
    this._width = width;

    []

    this.swatch = new ColorBtn();

  }

  ColorSwatch.prototype = Object.create( PixelPainter.prototype );

  function ColorBtn ( color ){
    this._color = color;

    var colors = []

  }

  ColorBtn.prototype = Object.create( ColorSwatch.prototype );

  //create function to show default color swatch

window.onload = function() {
  var newColor;
  var dragColor;

  var main = document.getElementById( 'pixelPainter' );

  //ELEMENT DIV color
  var colors = document.createElement( 'div' );
    colors.className = 'colorGrid';
    main.appendChild( colors );

  var undoButton = document.createElement( 'button' );//<------------button element
    undoButton.className = 'undoButton';
    main.appendChild( undoButton );

  for( var i = 1; i <= 12; i++ ){
    var colorRow = document.createElement( 'div' );
    colorRow.id = 'colorRow' + i;
    colorRow.className = 'colorRow';
    colors.appendChild( colorRow );

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
  var stroke = false;
  var undoArray = [];

  //ELEMENT DIV pixelGrid
  var pixelGrid = document.createElement( 'div' );
    pixelGrid.className = 'pixelGrid';
    main.appendChild( pixelGrid );

  for( var k = 1; k <= 50; k++ ){
    var canvasRow = document.createElement( 'div' );
    canvasRow.id = 'canvasRow';
    canvasRow.className = 'canvasRow' + k;
    pixelGrid.appendChild( canvasRow );

    for( var p = 1; p <= 50; p++ ){
      var canPixels = document.createElement( 'div' );
      canPixels.id = 'canPixels' + p;
      canPixels.className = 'canPixels';
      canvasRow.appendChild( canPixels );

      //when click current color will appear
      canPixels.addEventListener( 'click', function() {//<---------click fn
        var stroke = true;
          console.log(stroke);//<-----------------------------------stroke

        if( dragColor === this.style.background ){
          dragColor = !newColor;
          return dragColor;
        }

        this.style.background = newColor;
        dragColor = newColor;
        return dragColor;

      });

      //then when dragged, will appear current color
      canPixels.addEventListener( 'mouseover', function() {
        this.style.background = dragColor;

        while( stroke === true ){
          undoArray.push( canPixels );
          console.log(undoArray);//<---------------------------------push!
          return undoArray;
        }
      });
    }
  }

  document.getElementById('colorBtn1').style.background = 'red';
  document.getElementById('colorBtn2').style.background = 'orange';
  document.getElementById('colorBtn3').style.background = 'blue';
  document.getElementById('colorBtn4').style.background = 'pink';
  document.getElementById('colorBtn5').style.background = 'green';
  document.getElementById('colorBtn6').style.background = 'turquoise';







};

//whaaaaazzzuuuuppppp forkerrrrrrr!!!!

//spooning leads to forking!!!!!!!!

//updates live or nah?????