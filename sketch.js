var bullet, wall;
var speed, weight, thickness;
function setup() {
  createCanvas(1600,400);
  speed=createSprite(random(223,321));
 weight=random(30,52);
 bullet = createSprite(50,200,5,20);
 speed=random(223,321);
 wall = createSprite(1200,200,thickness,height/2);
 wall.shapeColor="blue";
bullet.velocityX = speed;
 wall.thickness = random(22,83);
 bullet.shapeColor="white";
}

function draw() {
  background(255,255,255);  
 if(hasCollided(bullet,wall))
 {
   bullet.velocityX=0;
   var damage= 0.5 * bullet.weight * bullet.speed * bullet.speed / (thickness * thickness * thickness);
   if(damage>10)
   {
     wall.shapeColor=color(255,0,0);
   }
   if(damage<10)
   {
     wall.shapeColor=color(0,255,0);
   }
 }
  drawSprites();
}