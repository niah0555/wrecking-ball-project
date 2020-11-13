
const World= Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine; 
var world;
var Ground;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;


  Ground = new ground(400, 300, 800, 20);

  block1 = new block(100, 250, 100, 50);
  block2 = new block(100, 200, 100, 50);
  block3 = new block(100, 150, 100, 50);
  block4 = new block(200, 250, 100, 50);
  block5 = new block(200, 200, 100, 50);
  block6 = new block(200, 150, 100, 50);
  block7 = new block(150, 100, 100, 50);
  block8 =new block(150, 50, 100, 50);

  Ball = new ball(700, 200, 30);

 String1 = new string(Ball.body, {x:700, y: 10});
  Engine.run(engine);
}

function draw() {
  background("pink");  
  Ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  Ball.display();
  String1.display();
}
function mouseDragged(){
  Matter.Body.setPosition(Ball.body, {x:mouseX, y:mouseY});

}
