
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var trash1,trash2,trash3,ground,ball,dust

function preload()
{
	du = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	Engine.run(engine);

	trash1 = new TRASH(1050,650,200,5);
	trash2 = new TRASH(950,610,5,50);
	trash3 = new TRASH(1150,610,5,50);

	ground = new GROUND();

	ball = new PAPER(50,650,70);
	

}

function draw() {
  rectMode(CENTER);
  background("white");
  
  Engine.update(engine);
  
  drawSprites();

  
  ground.display();
 
  trash1.display();
  trash2.display();
  trash3.display();

  ball.display();

  imageMode(CENTER);
  image(du,1050,510,250,300)

  

  
  

}

function keyPressed(){
if(keyCode === UP_ARROW){

	Matter.Body.applyForce(ball.body,ball.body.position,{x:1050,y:-1150});

}

}
