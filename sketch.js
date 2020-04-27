const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var rect1,rect2,rect3,rect4,rect5,rect6,rect7;
var triangle,triangle1,triangle2,triangle3,triangle4,triangle5,triangle6,triangle7;

var ground;

function setup(){
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;

    rect1 = new Rectangle(90, 300, 50, 200);
    rect2 = new Rectangle(20, 300, 15, 300);
    rect3 = new Rectangle(565, 300, 15, 300);
    rect4 = new Rectangle(500, 300, 50, 200);
    rect5 = new Rectangle(140, 320, 50, 150);
    rect6 = new Rectangle(450, 320, 50, 150);
    rect7 = new Rectangle(385, 320, 80, 120);
    rect8 = new Rectangle(205, 320, 80, 120);
    rect9 = new Rectangle(295, 320, 50, 200);
    triangle1= new Triangle(83,74,3,30);
    triangle2= new Triangle(118,87,3,30);
    triangle3= new Triangle(152,77,3,47);
    triangle4= new Triangle(190,42,3,30);
    triangle5= new Triangle(242,40,3,47);
    triangle6= new Triangle(273,22,3,30);
    triangle7= new Triangle(289,-10,3,30);
    ground = new Ground(200,390,900,20);

    
}

function draw(){
    
    background("black");
    text(mouseX + ',' + mouseY, 10, 15);
    Engine.update(engine);

    rect1.display();
    rect2.display();
    rect3.display();
    rect4.display();
    rect5.display();
    rect6.display();
    rect7.display();
    rect8.display();
    rect9.display();
    
    triangle1.display();
    triangle2.display();
    triangle3.display();
    triangle4.display();
    triangle5.display();
    triangle6.display();
    triangle7.display();
    
    ground.display();
}