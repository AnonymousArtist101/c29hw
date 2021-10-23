const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground, wall1, wall2, bridge;
var jointLink, jointPoint;

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
   ground = new Base(width/2,height,width,50);
   wall1 = new Base(100, height-50, 200, 400);
   wall2 = new Base(width-100, height-50, 200, 400);
  //var jointPoint = new Base(300, 300, 100, 100);
   bridge = new Bridge(20,{x:200,y:350});
   Matter.Composite.add(bridge.body, wall2);
  jointLink = new Link(bridge, wall2);
  

}

function draw() {
  background(51);
  
  

  ground.show();
  wall1.show();
  wall2.show();
  //jointPoint.show();
  bridge.show();
  Engine.update(engine);


  
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  //jointLink.show();
  //jointLink2.show();

}
