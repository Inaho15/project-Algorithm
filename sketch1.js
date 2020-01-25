var frect, mrect;
function setup() {
  createCanvas(800,400);
  frect = createSprite(200,200,60,40);
  frect.shapeColor = "Purple";
  mrect = createSprite(200,300,40.20);
  mrect.shapeColor = "Green";
  mrect.velocityY = -2;
  frect.velocityY = 3;
}

function draw() {
  background(255,255,255);
  if (mrect.x-frect.x<frect.width/2+mrect.width/2
    &&frect.x-mrect.x<frect.width/2+mrect.width/2){
        mrect.velocityX = mrect.velocityX* (-1);
        frect.velocityX = frect.velocityX* (-1);
    }  
 if  (mrect.y-frect.y<frect.height/2+mrect.height/2
        &&frect.y-mrect.y<frect.height/2+mrect.height/2){
            mrect.velocityY = mrect.velocityY* (-1);
            frect.velocityY = frect.velocityY* (-1);
        }  
drawSprites();
    }