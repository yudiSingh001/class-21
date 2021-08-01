var fixedRect,movingRect,ball;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 50);
  movingRect = createSprite(200, 200, 70, 100);
  ball = createSprite(100, 200, 15, 15);
  ball.velocityX = 3;

}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

 if(isTouching(fixedRect,movingRect)){
   fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "blue";

 }
else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}
 
bounceOff(ball,fixedRect);

  drawSprites();
}

