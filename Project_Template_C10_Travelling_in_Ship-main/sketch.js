var ship , sea,seaimg,shipimg;
function preload(){
shipimg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaimg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,190)
  sea.addImage(seaimg);
  sea.scale = 0.5
ship = createSprite(200,200)
  ship.addAnimation("ship",shipimg);
ship.scale = 0.2
}


function draw() {
  background("white");
  sea.velocityX = -3
  if(sea.x < 0){
    sea.x = sea.width/7;
  }
 drawSprites();
 
}