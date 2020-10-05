class ROPE 
{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;        
        
        var options=
        {
         'bodyA' : bodyA,
         'bodyB' : bodyB,
         'pointB' : {x: this.offsetX, y: this.offsetY},
         'offsetX': offsetX,
         'offsetY':offsetY

         };

     this.rope = Matter.Constraint.create(options);
     World.add(world, this.rope);
    }
   
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        strokeWeight(4);
        stroke(56,56,56);
         
        var posAX =pointA.x
        var posAY =pointA.y
        
        var posBX =pointB.x + this.offsetX
        var posBY =pointB.y + this.offsetY

        line(posAX, posAY, posBX, posBY);
    }
}