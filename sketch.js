
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint= Matter.Constraint;
var dustbinObj,groundObject;
var engine,world;
var paper;


function setup() {
  createCanvas(1600,700);
	engine = Engine.create();
	world = engine.world;

	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paper = new Paper(200,100,50,10);


  
}


function draw() {
  background("yellow");
 Engine.update(engine);
 

  groundObject.display();
  dustbinObj.display();
  paper.display();

}

