//Car
var car;

//Wall
var wall;

//speed and weight
var speed, weight;

//Deformation
var deformation;

function setup() {
  createCanvas(1600,400);

  speed = round(random(55, 90));

  weight = round(random(400, 1500));

  //car
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed
  car.shapeColor = "white";

  //wall
  wall = createSprite(1500, height / 2, 60, height / 2);
  wall.shapeColor = "grey";

}

function draw() {
  background("black");  

  //collision between car and wall
  if(abs(car.x - wall.x) <= car.width / 2 + wall.width / 2 && abs(car.y - wall.y) <= car.height / 2  + wall.height / 2){
    car.velocityX = 0;

    deformation = 0.5 * weight * speed * speed / 22500;
  }

  //deformation and crash force 
  if(deformation <= 80){
    car.shapeColor = "green";
  }

  if(deformation > 80 && deformation <= 180){
    car.shapeColor = "yellow";
  }

  if(deformation > 180){
    car.shapeColor = "red";
  }

  drawSprites();
}