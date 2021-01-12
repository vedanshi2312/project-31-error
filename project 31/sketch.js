const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var Ground;

function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
 engine = Engine.create();
 world = engine.world;
 
 ground = new Ground(600,height,1200,20)
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  ground.display();

  drawSprites();
}