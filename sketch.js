const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand1,stand2;
var polygon;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground();
  stand1 = new Stand(400,300,300,10);
 
  //level one
  block1 = new Block(280,275,40,40);
  block2 = new Block(320,275,40,40);
  block3 = new Block(360,275,40,40);
  block4 = new Block(400,275,40,40);
  block5 = new Block(440,275,40,40);
  block6 = new Block(480,275,40,40);
  block7 = new Block(520,275,40,40);

  //level two
  block8 = new Block(320,235,40,40);
  block9 = new Block(360,235,40,40);
  block10 = new Block(400,235,40,40);
  block11 = new Block(440,235,40,40);
  block12 = new Block(480,235,40,40);

  //level three
  block13 = new Block(360,195,40,40);
  block14 = new Block(400,195,40,40);
  block15 = new Block(440,195,40,40);

  //top
  block16 = new Block(400,155,40,40);

  //polygon holder with slings
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  slingShot = new Slingshot(this.polygon,{x:100,y:200});

}
function draw() {
  background(56,44,44); 
  //Engine.update(engine);
  ground.display();
  stand1.display();

  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill("lightgreen");
  block13.display();
  block14.display();
  block15.display();

  fill("gold");
  block16.display();

  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.polygon);
  }
}