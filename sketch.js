
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var leftSide;
var rightSide;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 610);


	engine = Engine.create();
	world = engine.world;

	ground =new Ground(1100,600,2200,20);
	leftSide =new Ground(780,535,10,110);
	rightSide = new Ground(950,535,10,110);

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2		
	}

	//Create the Bodies Here.
	ball = Bodies.circle(250,10,10,ball_options)

	World.add(world,ball);

	ellipseMode(RADIUS);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x,ball.position.y,10);


	
  ground.show();
  leftSide.show();
  rightSide.show();
  keyPressed();

  drawSprites();
 
}

function keyPressed()
{
  if(keyCode==UP_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.01,y:-0.05});
    }
}



