var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof1;
var rope1, rope2, rope3, rope4, rope5;
var bobDiameter = 51

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

   
engine = Engine.create();
world = engine.world;


function setup(){
    
    createCanvas(1000,1000)

    roofObject = new roof(400, 250, 230, 20);

    bobObject1 = new bob(320, 575, 20);

    bobObject2 = new bob(360, 575, 20);

    bobObject3 = new bob(400, 575, 20);

    bobObject4 = new bob(440, 575, 20);

    bobObject5 = new bob(480, 575, 20);

    rope1 = new rope(bobObject1.body,roofObject.body, -80);

    rope2 = new rope(bobObject2.body, roofObject.body, -40);

    rope3 = new rope(bobObject3.body,roofObject.body, 0);

    rope4 = new rope(bobObject4.body,roofObject.body, 40);

    rope5 = new rope(bobObject5.body, roofObject.body, 80);

}


function draw(){

    background("white");

    Engine.update(engine);

    roofObject.display();
    bobObject1.display();
    bobObject2.display();
    bobObject3.display();
    bobObject4.display();
    bobObject5.display();
    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display(); 
    rope5.display();

}

function keyPressed(){
    if(keyCode == 32){
        Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x: -50, y:-45});
    }
}