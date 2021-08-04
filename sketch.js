var wall,thickness;
var bullet, speed ,weight;


function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500); 
  thickness = random(22,83);
bullet = createSprite(50,200,50,50);

bullet.velocityX = speed ;

bullet.shapeColor = color("white");

wall = createSprite(1500,200,60,height/2);
wall.shapeColor = color(80,80,80);


}

function draw() {
  background("black");  
  if(hasCollieded( bullet,wall))
  {
  bullet.velocityX = 0
  var damage = 0.5 * weight * speed * speed/22500
  console.log(damage);
  if(damage>10)
  {
      wall.shapeColor = color("green");
  }
  if(damage<10)
  {
      wall.shapeColor = color("red");
  }
  }
  drawSprites();
}
function hasCollieded( bullet,wall){
bulletRightEdge = bullet.x +bullet.width;
wallLeftedge = wall.x
if(bulletRightEdge >= wallLeftedge){
return true;
}
return false;
}