class planet
{
  constructor(a, planetR, name, projectURL, x, y, lengthMulti, zooms)
  {
    this.a = a;
    this.planetR = planetR;
    this.name = name;
    this.projectURL = projectURL;
    this.x = x;
    this.y = y;
    this.lengthMulti = lengthMulti;
    this.zoom= zooms;
  }

  show()
  {
    this.x = (w/this.lengthMulti * sin(this.a)) + w/2;
    this.y = (h/this.lengthMulti * cos(this.a)) + h/2;
    stroke(255);
    line(w/2, h/2, this.x, this.y);
    noStroke();
    fill(255);
    ellipse(this.x, this.y, this.planetR);
  }

  mouseOn(px, py)
  {
    let d = dist(px, py, this.x, this.y)
    if(d < this.planetR/2)
    {
      this.zooms = 1;
    }
    else
    {
      this.zooms = 0;
    }
  }
}
