var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles;
var plinkos = [];
var divisions=[];

var divisionHeight=200;
var count=0;
var score =0;
var gameState="PLAY"

function setup()
 {
    createCanvas(800, 590);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(width/2,height,width,20);
  
      for (var k = 0; k <=width; k = k + 80) 
      {
        divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
      }


        for (var j = 75; j <=width; j=j+50) 
        {
          plinkos.push(new Plinko(j,75));
        }
        for (var j = 50; j <=width-10; j=j+50) 
        {
          plinkos.push(new Plinko(j,150));
        }
        for (var j = 75; j <=width; j=j+50) 
        {
          plinkos.push(new Plinko(j,225));
        }
        for (var j = 50; j <=width-10; j=j+50) 
        {
          plinkos.push(new Plinko(j,300));
        }
}
 
function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);
  push()
  fill("yellow")
 rect(400,350,800,5)
 pop()
 textSize(30)
 text(" 500 ", 5, 420);
 text(" 500 ", 80, 420);
 text(" 500 ", 160, 420);
 text(" 500 ", 240, 420);
 text(" 100 ", 320, 420);
 text(" 100 ", 400, 420);
 text(" 100 ", 480, 420);
 text(" 200 ", 560, 420);
 text(" 200 ", 640, 420);
 text(" 200 ", 720, 420);

   for (var i = 0; i < plinkos.length; i++) 
   { 
     plinkos[i].display();
   }
   
   if(particles!=null)
   {
     fill(random(0,255),random(0,255),random(0,255))
       particles.display();
          if(particles.body.position.y > 350 && particles.body.position.y < 355 )
          {       
                //500 points
                if(particles.body.position.x<300 && particles.body.position.x>1)
                {
                  score=score + 500;
                  if(count>5){gameState="END"}
                }
                //100 points
                if(particles.body.position.x>301 && particles.body.position.x < 600)
                {
                  score=score + 100;
                  if(count>5){gameState="END"}
                }
                //200 points
                if(particles.body.position.x > 601 && particles.body.position.x < 800)
                {
                  score=score + 200;
                  if(count>5){gameState="END"}
                }
          }
   }
   
   for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }

   if ( gameState =="END") 
   {
    textSize(100);
    fill("blue")
    text("GameOver", 150, 250);
  }


}
function mousePressed()
{
  if(gameState==="PLAY")
  {
     particles=new Particle(mouseX, 10, 10); 
     count++;
  }   
}