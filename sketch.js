var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200, 200, 50, 30)
  box.shapeColor = "blue"
}

function draw() 
{
  background(30);
  if (keyIsDown(UP_ARROW)){
    background("yellow");
  }
  if (keyIsDown(DOWN_ARROW)){
    background("green");
  }
  if (keyIsDown(LEFT_ARROW)){
    background("purple");
  }
  if (keyIsDown(RIGHT_ARROW)){
    background("orange");
  }
  drawSprites();
}




