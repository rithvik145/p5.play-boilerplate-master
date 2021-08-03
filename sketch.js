var wall,thickness;
var car, speed ,weight;


function setup() {
  createCanvas(2600,400);
  speed = random(223,321);
  weight = random(30,52); 
  thickness = random(22,83);
car = createSprite(50,200,50,50);

car.velocityX = speed ;

car.shapeColor = color("white");

wall = createSprite(1500,200,thickness,height/2);
wall.shapeColor = color(80,80,80);


}

function draw() {
  background("black");  
  if(wall.x -car.x< (car.width+wall.width)/2)
  {
  car.velocityX = 0
  var deformation = 0.5 * weight * speed * speed/22500
  if(deformation>180)
  {
      car.shapeColor = color(250,0,0)
  }
  if(deformation<100 && defomation>100)
  {
      bullents.shapeColor = color(230,230,0)
  }
  if(deformation<100)
  {
      cars.shapeColor = color("red")
  }
  }
  drawSprites();
}