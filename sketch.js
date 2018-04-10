var r;
var w;
var h;
var s1;
var textConst;
var projectURLS =["Langtons-Ant", "", "", "", "", ""];
// var projects = ["Langtons Ant", "Salesman", "Project 3", "Project 3", "Project 3", "Project 3"];
var projects = ["Langtons Ant"];
var planets = [];
var angle;
var BGColor;
var latestZoom;
var clickable;
function setup()
{
	clickable = false;
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
	// textConst = r/3.6203611;
	angle = 360/projects.length;
	createCanvas(windowWidth, windowHeight);
	background(BGColor);
	for(var i = 0; i < projects.length; i++)
	{
		planets[i] = new planet(angle*i, r/5, projects[i], projectURLS[i], 0, 0, random(2.5, 5), 0);
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
	update();
}

function mouseClicked()
{
	if(latestZoom.zooms == 1)
	{
		if(clickable == true)
		{
			window.open("https://chrisgibson98.github.io/" + latestZoom.projectURL, "_self");
		}
	}
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
function update()
{
	for(var i = 0; i < planets.length; i++)
	{
		planets[i].mouseOn(mouseX, mouseY);
	}
	for(var i = 0; i < planets.length; i++)
	{
		if(planets[i].zooms == 1)
		{
			if(planets[i] != latestZoom)
			{
				reset();
			}
			latestZoom = planets[i];
			// console.log(latestZoom.projectURL);
			if(latestZoom.zooms == 1)
			{
				clickable = false;
				latestZoom.planetR ++;
				if(latestZoom.planetR > r)
				{
					latestZoom.planetR = r;
				}
				colorMode(RGB)
				fill(255);
				if(latestZoom.planetR < r)
				{
					ellipse(latestZoom.x, latestZoom.y, latestZoom.planetR);
				}
				else {
					clickable = true;
				}
			}
		}
	}
	if (latestZoom.zooms == 0)
	{
		reset();
	}
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
