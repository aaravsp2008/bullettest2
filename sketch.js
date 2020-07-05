//var
var bullet1;
var wall1;
var speed,weight,thickness;

//setup
function setup() {
  createCanvas(1600,400);

  //giving random value to speed and weight and thickness
   thickness = random(22,83);
   speed = random(223,321);
   weight = random(30,52);

  // creating cars
   bullet1 = createSprite(50,200,10,10);
   
  // creating walls
   wall1 = createSprite(1200,200,thickness,height/2);

  //velocity of cars 
   bullet1.velocityX = speed;

  //color to the wall and bullet
   wall1.shapeColor = color(80,31,80);
   bullet1.shapeColor = color(33,218,255);

}

//draw
function draw() {
  background(255,255,255); 
  if(wall1.x-bullet1.x < (bullet1.width+wall1.width)/2){
     bullet1.velocityX = 0;
     var deformation = 0.5*weight*speed*speed/22509;
     if(deformation>180){
     bullet1.shapeColor = color(255,0,0);
     }
  }
  
  bullet1.display();
  wall1.display();
  drawSprites();
}

//has collided
function hasCollided(bullet1,wall1){
  bulletRightEdge = bullet1.x+bullet1.width;
  wallLeftEdge = wall1.x;
  if(bulletRightEdge<=wallLeftEdge){
    return true;
  }

  return false;

  if(hasCollided(bullet1,wall1)){

    bullet1.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall1.shapeColor = color(0,21,255);
    }

    if(damage<10){
      wall1.shapeColor = color(219,104,28);
    }
  }

}