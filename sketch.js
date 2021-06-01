const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var Base, Ball, Chain;
var Box11, Box12, Box13, Box14, Box15;
var Box21, Box22, Box23, Box24;
var Box31, Box32, Box33;
var Box41, Box42;
var Box51;
function setup(){
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;

    Base = new Ground(300, 400, 600, 50);

    Ball = Bodies.circle(200, 300, 75);

    Chain = new Rope(Ball.body,{x:200, y:200});

    Box11 = new Pellet( 150, 350, 50, 50)
    Box12 = new Pellet( 200, 350, 50, 50)
    Box13 = new Pellet( 250, 350, 50, 50)
    Box14 = new Pellet( 300, 350, 50, 50)
    Box15 = new Pellet( 350, 350, 50, 50)

    Box21 = new Pellet( 175, 300, 50, 50)
    Box22 = new Pellet( 225, 300, 50, 50)
    Box23 = new Pellet( 275, 300, 50, 50)
    Box24 = new Pellet( 325, 300, 50, 50)

    Box31 = new Pellet( 200, 250, 50, 50)
    Box32 = new Pellet( 250, 250, 50, 50)
    Box33 = new Pellet( 300, 250, 50, 50)

    Box41 = new Pellet( 225, 200, 50, 50)
    Box42 = new Pellet( 275, 200, 50, 50)

    Box51 = new Pellet( 250, 150, 50, 50)
}

function draw(){
    Engine.update(engine);

    Base.display();
    Chain.display();   

    Box11.display();
    Box12.display();
    Box13.display();
    Box14.display();
    Box15.display();

    Box21.display();
    Box22.display();
    Box23.display();
    Box24.display();

    Box31.display();
    Box32.display();
    Box33.display();

    Box41.display();
    Box42.display();
    
    Box51.display();
}

function mouseDragged(){
    Matter.Body.setPosition(Ball.body, {x: mouseX , y: mouseY});
}

