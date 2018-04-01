var width;
var squareSize;
var density;
var cells = new Array(density);
var x;
var y;
var newAnt;
var steps;
var go;
var BGColor;
var multiHue;
var maxd;
var sucks;

function setup()
{
	density = 600;
	width = 600;
	BGColor = 50;
	go = 1;
	steps = 0;
	squareSize = width/density;
	createCanvas(width + 1, width + 1);
	background(BGColor, BGColor, BGColor);
	noStroke();
	maxd = int(dist(0, 0, (density/2)*squareSize, (density/2)*squareSize));
	multiHue = 360/maxd;
	// console.log(multi);
	// steps = 0;
	for (var j = 0; j < density; j++)
	{
		cells[j] = new Array(density);
		for(var i = 0; i < density; i++)
		{
			cells[j][i] = new cell(i * squareSize, j * squareSize, i, j, squareSize, 0, int(dist(i * squareSize, j * squareSize, width/2, width/2)));
			cells[j][i].show();
		}
	}
	  newAnt = new ant(cells[Math.floor(density/2)][Math.floor(density/2)], squareSize, 3);
}

function draw()
{
newAnt.move(100);
	// console.log(multi);
}
