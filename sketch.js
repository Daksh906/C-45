var seaimg,shipimg,vehicleimg,playerimg,whaleimg,underwaterimg;
var ship,player,vehicle,whale;
var gameState = "upwater";

function preload(){
seaimg = loadImage("sea.gif");
shipimg = loadAnimation("Shipimg.png");
vehicleimg = loadImage("submarine.png");
playerimg = loadImage("character.png");
whaleimg = loadImage("orcawhalepp.png");
underwaterimg = loadImage("background2.jpg")
}

function setup() {
  createCanvas(displayWidth*2,700);
  ship = createSprite(400, 200, 50, 50);
  ship.addAnimation("ship",shipimg);
  player = createSprite(420,200,50,50);
  player.addImage("player",playerimg);
  vehicle = createSprite(ship.x,ship.y,50,50);
  vehicle.addImage("vehicle",vehicleimg);
  vehicle.visible = false;
  vehicle.scale = 0.5;
  
}

function draw() {
  background(seaimg); 
 if(gameState == "upwater"){
  
 
  if  (keyDown("RIGHT_ARROW"))
{
  ship.velocityX=10;
  ship.velocityY=0;
  player.velocityX=10;
  player.velocityY=0;
}
  if   (keyDown("left"))
  {
    ship.velocityX=-10;
    ship.velocityY=0;
    player.velocityX=-10;
    player.velocityY=0;
  }
  
if(ship.x >=3000){
  text("Congrats you have successfully reached the Mariana Trench and your submersible vehicle is ready",displayWidth-200,100);
  vehicle.velocityY = 2;
  vehicle.visible = true;
  vehicle.x = ship.x-80;
  vehicle.y = ship.y+200;
  if(keyDown("down")) {
    player.velocityY = 2;
  }
  if(player.isTouching(vehicle)){
    gameState = "underwater";
    ship.visible = false;
    player.visible = false;
  }
  ship.velocityX = 0;
  player.velocityX = 0;
}
 }
 if (gameState == "underwater"){
   resizeCanvas(1700,displayHeight*2,true);
   background(underwaterimg);
   vehicle.visible = true;
   vehicle.x = 200;
   spawnAnimals();
 }
 console.log(vehicle.x);
  drawSprites();
}
function spawnAnimals(){
  if(frameCount%100 == 0){
  whale = createSprite(200,600,50,50);
  whale.addImage("whale",whaleimg);
  whale.velocityX = 2;
  }
}