var r;
var w;
var h;
var s1;
var textConst;
var projects = ["Langtons Ant", "Salesman", "project 3", "project 3", "project 3", "project 3", "project 3", "project 3", "project 3", "project 3", "project 3", "project 3", "project 3", "project 3", "project 3", "project 3", "project 3",];
var planets = [];
var angle;
function setup()
{
	angleMode(DEGREES);
	if (windowWidth > windowHeight)
	{
		r = windowHeight/6;
	}
	else
	{
		r = windowWidth/6;
	}
	w = windowWidth;
	h = windowHeight;
	s1 = "Projects";
	textConst = r/3.6203611;
	angle = 360/projects.length;
	createCanvas(windowWidth, windowHeight);
	background(50);
	fill(255);
	noStroke();
	ellipse(w/2, h/2, r);
	fill(255, 0, 0);

	// rect(w/2 - r, h/2, r*2, 1);
		// rect(w/2, h/2 - r, 1, r*2);
		// rect(w/2 - r, h/2 - 8, r*2, 1);
		for(var i = 0; i < projects.length; i++)
		{
			planets[i] = new planet(angle*i, i, 0, 0, random(2.5, 5));
			planets[i].show();
		}
}

function draw()
{
	textConst = r/3.6203611;
fill(50);
textSize(textConst);
text(s1, w/2 - r/2, h/2 + (textConst/3));
// console.log(angle);
}
function windowResized()
{
  resizeCanvas(windowWidth, windowHeight);
	clear();
	w = windowWidth;
	h = windowHeight;
	if (windowWidth > windowHeight)
	{
		r = windowHeight/6;
	}
	else
	{
		r = windowWidth/6;
	}
	background(50, 50, 50);
	fill(255);
	noStroke();
	ellipse(w/2, h/2, r);
for(var i = 0; i < planets.length; i++)
{
	planets[i].show();
}
}
