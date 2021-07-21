const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var leftside,rightside,base;


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  leftside = new LeftSide(100,200,280,280);
  rightside = new RightSide(1400,200,280,280);
  base = new Base(200,200,280,280);
}
function draw() {
  background(51);
  Engine.update(engine);
  leftside.display()
  rightside.display()
  base.display()
  
}
