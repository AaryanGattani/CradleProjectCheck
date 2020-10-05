class BOB
{
    constructor(x, y, radius) {
        var options = {
            'isStatic' : true,
            'restitution':0.4,
            'friction':0.8,
            'density':0.3,
        }
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.body = Bodies.circle(x, y, radius, options);
        World.add(world, this.body);
        
        
      }
      display()
      {
        push();
        translate(this.body.position.x, this.body.position.y);
      strokeWeight(3);
      ellipseMode(CENTER);
        fill("RED");
	    ellipse(0,0, this.radius);
        pop();
      }
}