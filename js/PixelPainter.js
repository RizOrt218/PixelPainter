
window.onload = function(){
  // var main = document.getElementById(('pixelPainter'));

  // //ELEMENT DIV color
  // var colors = document.createElement('div');
  //   colors.className = 'colorGrid';
  //   main.appendChild(colors);

  // //ELEMENT DIV pixelGrid
  // var pixelGrid = document.createElement('div');
  //   pixelGrid.className = 'pixelGrid';
  //   main.appendChild(pixelGrid);

  // for( var i = 1; i <= 3; i++){
  //   var colorRow = document.createElement('div');
  //   colorRow.id = 'colorRow' + i;
  //   colorRow.className = 'colorRow';
  //   colors.appendChild(colorRow);

  //   for( var j = 1; j <= 6; j++){
  //     var colorBtn = document.createElement('div');
  //     colorBtn.id = 'colorBtn' + j;
  //     colorBtn.className = 'colorBtn';
  //     colorRow.appendChild(colorBtn);
  //   }
  // }

  function PixelPainter ( name ){
    this._name = name;
  }

  function ColorSwatch ( height, width ){
    this._height = height;
    this._width = width;
  }

  ColorSwatch.prototype = Object.create( PixelPainter.prototype );

  function ColorBtn ( color ){
    this._color = color;
  }

  ColorBtn.prototype = Object.create( ColorSwatch.prototype );
};

//whaaaaazzzuuuuppppp forkerrrrrrr!!!!

//spooning leads to forking!!!!!!!!