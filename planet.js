class planet
{
  constructor(a, name, x, y, lengthMulti)
    {
this.a = a;
this.name = name;
this.x = x;
this.y = y;
this.lengthMulti = lengthMulti;
// this.x = (w/this.lengthMulti * sin(this.a)) + w/2;
// this.y = (this.length * cos(this.a)) + h/2;
// console.log(this.x + ", " + this.y);
    }
    show()
{
      this.x = (w/this.lengthMulti * sin(this.a)) + w/2;
      this.y = (h/this.lengthMulti * cos(this.a)) + h/2;
      stroke(255);
      line(w/2, h/2, this.x, this.y);
      noStroke();
      fill(255);
      ellipse(this.x, this.y, r/5);
      console.log(this.a + ", " + dist(w/2, h/2, this.x,this.y));
    }
}
