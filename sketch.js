var r;
var w;
var h;
var s1;
var textConst;
var projects = ["Langtons Ant", "Salesman", "Project 3", "Project 3", "Project 3", "Project 3"];
var planets = [];
var angle;
var BGColor;
var latestZoom;
function setup()
{
	latestZoom = 0;
	BGColor = 25;
	isZoom = 0;
	angleMode(DEGREES);
	if (windowWidth > windowHeight)
	{
		r = windowHeight/4;
	}
	else
	{
		r = windowWidth/4;
	}
	w = windowWidth;
	h = windowHeight;
	s1 = "Projects";
	textConst = r/3.6203611;
	angle = 360/projects.length;
	createCanvas(windowWidth, windowHeight);
	background(BGColor);
	for(var i = 0; i < projects.length; i++)
	{
		planets[i] = new planet(angle*i, r/5, projects[i], 0, 0, random(2.5, 5), 0);
		planets[i].show();
	}
	fill(255);
	noStroke();
	ellipse(w/2, h/2, r);
	textConst = r/(3.6203611 + .5203611);
	fill(25);
	textSize(textConst);
	text(s1, w/2 - r/2 + ((r - textWidth(s1))/2), h/2 + ((textConst)/3));
}

function draw()
{
	for(var i = 0; i < planets.length; i++)
	{
		planets[i].mouseOn(mouseX, mouseY);
	}
	for(var i = 0; i < planets.length; i++)
	{
		if(planets[i].zooms == 1)
		{
			latestZoom = planets[i];
			if(latestZoom.zooms == 1)
			{
				planets[i].planetR ++;
				if(planets[i].planetR > r)
				{
					planets[i].planetR = r;
				}
				// console.log(planets[i].zooms);
				colorMode(RGB)
				fill(255);
				ellipse(planets[i].x,planets[i].y,planets[i].planetR);
			}
		}
	}
	if (latestZoom.zooms == 0)
	{
		reset();
	}
}

function keyPressed()
{
	reset();
}

function reset()
{
	clear();
	colorMode(RGB);
	background(BGColor);
	for(var i = 0; i < planets.length; i++)
	{
		planets[i].planetR = r/5;
		planets[i].show();
	}
	fill(255);
	noStroke();
	ellipse(w/2, h/2, r);
	textConst = r/(3.6203611 + .5203611);
	fill(25);
	textSize(textConst);
	text(s1, w/2 - r/2 + ((r - textWidth(s1))/2), h/2 + ((textConst)/3));
}



function windowResized()
{
	colorMode(RGB);
	resizeCanvas(windowWidth, windowHeight);
	clear();
	w = windowWidth;
	h = windowHeight;
	if (windowWidth > windowHeight)
	{
		r = windowHeight/4;
	}
	else
	{
		r = windowWidth/4;
	}
	background(BGColor);
	fill(255);
	noStroke();
	ellipse(w/2, h/2, r);
	for(var i = 0; i < planets.length; i++)
	{
		planets[i].show();
	}
	textConst = r/(3.6203611 + .5203611);
	fill(25);
	textSize(textConst);
	text(s1, w/2 - r/2 + ((r - textWidth(s1))/2), h/2 + ((textConst)/3));
}
