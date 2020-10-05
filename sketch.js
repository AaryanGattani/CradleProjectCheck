
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	BOBDiameter=50;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new BOB(260,400,70);
	bob2 = new BOB(330,400,70);
	bob3 = new BOB(400,400,70);
	bob4 = new BOB(470,400,70);
	bob5 = new BOB(540,400,70);

	roof = new ROOF(200,10,400,20);

	rope1 = new ROPE(bob1.body,roof.body,50,0);
	rope2 = new ROPE(bob2.body,roof.body,120,0);
	rope3 = new ROPE(bob3.body,roof.body,190,0);
	rope4 = new ROPE(bob4.body,roof.body,260,0);
	rope5 = new ROPE(bob5.body,roof.body,330,0);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(400);
 
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  drawSprites();
 
  keyPressed();
 
}

function keyPressed()
{
	 if(keyCode === UP_ARROW)
	 {
		 Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-70,y:-70});
	 }
}


