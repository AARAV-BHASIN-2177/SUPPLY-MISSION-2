var helicopterIMG, helicopterSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var packageSprite;
var side1sprite,side1Body;
var bottomSidesprite,bottomSideBody;
var side2sprite,side2Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	var side1sprite=createSprite(500,610,20,100);
	side1sprite.shapeColor=color("red");

	var bottomSidesprite=createSprite(400,650,200,20);
	bottomSidesprite.shapeColor=color("red");

	var side2sprite=createSprite(300,610,20,100);
	side2sprite.shapeColor=color("red");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	
	side1Body=Bodies.rectangle(580,610,20,100,{isStatic:true});
	World.add(world,side1Body);

	side2Body=Bodies.rectangle(380,610,20,100,{isStatic:true});
	World.add(world,side2Body);

	bottomSideBody=Bodies.rectangle(500,630,{isStatic:true});
	World.add(world,bottomSideBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  packageSprite
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
     Matter.Body.setStatic(packageBody,false);
    
  }
}



