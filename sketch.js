var world,ball,ground,lefttrash,righttrash,middletrash
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	

	// //Create a Ground
	// ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	// World.add(world, ground);


	Engine.run(engine);

	ball = new paper(200,200,30);
	ground = new Ground(600,650,1200,20);
	lefttrash = new dustbin(457,620,20,90);
	righttrash = new dustbin(635,620,20,90);
	middletrash = new dustbin(550,650,200,20);
	// recycle = new dustbin(540,615,100,100);

  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  ball.display();
  ground.display();
  lefttrash.display();
  righttrash.display();
  middletrash.display();
//   recycle.display();
  drawSprites();
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:120,y:-110});
	}
}
