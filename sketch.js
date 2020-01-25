var frect, mrect;
function setup() {
  createCanvas(800,400);
  frect = createSprite(200,200,60,40);
  frect.shapeColor = "Purple";
  mrect = createSprite(200,300,40.20);
  mrect.shapeColor = "Green";
  
}

function draw() {
  background(255,255,255);  
  mrect.x = World.mouseX;
  mrect.y = World.mouseY;
if (mrect.x-frect.x<frect.width/2+mrect.width/2
  && frect.x-mrect.x<frect.width/2+mrect.width/2 
  && mrect.y-frect.y<frect.height/2+mrect.height/2
  && frect.y-mrect.y<frect.height/2+mrect.height/2) {
  mrect.shapeColor = "red";
  frect.shapeColor = "blue";
}
else{
  frect.shapeColor = "Purple";
  mrect.shapeColor = "Green";
}

  drawSprites();
}