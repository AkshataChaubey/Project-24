const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var ball, ground;
var button1;
var ball2, button2;
var rotator1;
var angle = 30;
function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution: 0.95,
    frictionAir: 0.01,
  };

  var ground_options = {
    isStatic: true,
  };

  ground = Bodies.rectangle(100, 400, 400, 20, ground_options);
  World.add(world, ground);

  ball = Bodies.circle(100, 10, 20, ball_options);
  World.add(world, ball);

  ball2 = Bodies.circle(20, 30, 20, ball_options);
  World.add(world, ball2);

  button1 = createImg("up.png");
  button1.position(20, 30);
  button1.size(50, 50);
  button1.mouseClicked(myforce);

  rotator1 = Bodies.rectangle(40, 250, 20, 100, ground_options);
  World.add(world, rotator1);

  button2 = createImg("up.png");
  button2.position(200, 30);
  button2.size(50, 50);
  button2.mouseClicked(myforce2);
}

function draw() {
  background(51);
  Engine.update(engine);

  rectMode(CENTER);
  ellipseMode(RADIUS);

  ellipse(ball.position.x, ball.position.y, 20);

  push();
  fill(255, 204, 0);
  ellipse(ball2.position.x, ball2.position.y, 20);
  pop();
  console.log(ground.position.y);
  Matter.Body.rotate(rotator1,angle)
  push();
  rectMode(CENTER);
  translate(rotator1.position.x, rotator1.position.y);
  rotate(angle);
  rect(0, 0, 10, 100);
  angle += 0.1;
  pop();

 
}
function myforce() {
  // Matter.Body.applyForce(body, position, force)
  Body.applyForce(ball, { x: 0, y: 0 }, { x: 0, y: -0.05 });
}
function myforce2() {
  // Matter.Body.applyForce(body, position, force)
  Body.applyForce(ball2, { x: 0, y: 0 }, { x: -0.05, y: 0 });
}
