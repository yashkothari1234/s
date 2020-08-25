const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles = [];
var plinkos = [];
var divisions = [];

var score = 0;

var count = 0;

var particle;

var gameState = "play";

var divisionHeight = 300;

function preload() {
   
}

function setup(){
    createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

//create the bodies below 
ground = new Ground(240,790,480,15);

for(var k = 0; k<=width;k = k+80){
divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
}


for(var j = 40; j<=width;j = j+50){
  plinkos.push(new Plinko(j,75,30,30));
  }

  
for(var j = 15; j<=width-10;j = j+50){
  plinkos.push(new Plinko(j,175,30,30));
  }

  for(var j = 40; j<=width;j = j+50){
    plinkos.push(new Plinko(j,275,30,30));
    }
  
    
  for(var j = 15; j<=width-10;j = j+50){
    plinkos.push(new Plinko(j,375,30,30));
    }



    mousePressed();

Engine.run(engine);
}

function draw(){
    background(0);
    textSize(20)
    text("Score : "+score,20,30);
    text("500",25,510);
    text("100",105,510);
    text("100",190,510);
    text("100",265,510);
    text("100",350,510);
    text("500",430,510);
    rectMode(CENTER);
    ground.display();



for(var j = 0;j<particles.length;j++){
  particles[j].display();
  }


  for(var k = 0;k<divisions.length;k++){
    divisions[k].display();
    }

    for(var v = 0;v<plinkos.length;v++){
      plinkos[v].display();
      }



    if(frameCount%60===0){
     //particles.push(new Particle(random(width/2-10,width/2+10),10,10));
      mousePressed();
    }
    

    if(particle!=null){
particle.display();

if(particle.body.position.y>360){
if(particle.body.position.x<100){
score = score+500;
particle = null;
if(count>=5)gameState ="end";  
}
}
    }

    if(particle!=null){
      particle.display();
      
      if(particle.body.position.y>360){
      if(particle.body.position.x>101&&particle.body.position.x<400){
      score = score+100;
      particle = null;
      if(count>=5)gameState ="end";  
      }
      }
          }
          if(particle!=null){
            particle.display();
            
            if(particle.body.position.y>360){
            if(particle.body.position.x>401&&particle.body.position.x<480){
            score = score+500;
            particle = null;
            if(count>=5)gameState ="end";  
            }
            }
                }


drawSprites();
}

function mousePressed(){
  if(gameState!=="end"){
    count++;
    particle = new Particle(mouseX,10,10,10);
  }
}


