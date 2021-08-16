
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,left,right,floor1

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	var ball_options = {
		restitution:0.3,
		friction:0,
		density:1.2

	}


	floor1 = new Floor(width/2,695,width,10)
	left = new Floor(1100,675,20,120)
	right = new Floor(1350,675,20,120)
	

	//Create the Bodies Here.


	ball = Bodies.circle(100,100,10,ball_options)
	World.add(world,ball)


  
}


function draw() {
  Engine.update(engine)
  rectMode(CENTER);
  background(0);
  floor1.display()
  left.display()
  right.display()
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,10,10)
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode==DOWN_ARROW)
		Matter.Body.applyForce(ball,ball.position,{x:30,y:-30})
}


