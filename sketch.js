var fixedRect, movingRect;
var car,wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
 
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";

  car = createSprite(200,150,150,50);
  wall = createSprite(900,150,50,200);

  car.shapeColor="red";
  wall.shapeColor="white";
  car.velocityX =4;
  
}

function draw() {
  background(0,0,0);  

  if(isTouching(car,wall)){
     textSize (30);
     fill ("yellow");
     text("it is touching",600,600)
     car.velocityX = 0;
   }
   
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  drawSprites();
}

function isTouching(p1,p2){

  if(p1.x-p2.x < p2.width/2 + p1.width/2
    && p2.x - p1.x < p2.width/2 + p1.width/2
    && p1.y - p2.y < p2.height/2 + p1.height/2
    && p2.y-p1.y < p2.height/2 + p1.height/2){
    return true;
  }
  else{
  return false;
  }
}