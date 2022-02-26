var path,jake,jake2,left_boundary,right_boundary,coin,coinImg,coin,bomb,energydrink
var jakeImg,pathImg,bombImg,coinImg,energydrinkImg,powerImg;

var score;
var Lives;

function preload(){
  //pre-load images
 coinImg=loadImage("coin.png");
pathImg=loadImage("path.png");
powerImg=loadImage("power.png");
jakeImg=loadAnimation("Runner1.png","Runner2.png");
bombImg=loadImage("bomb.png");
energydrinkImg=loadImage("energyDrink.png");

}

function setup(){
  createCanvas(400,400)
  //create sprites here
path=createSprite(200,200);
path.addImage("running",pathImg);
path.velocityY=5;
path.scale=1;

jake=createSprite(200,370,50,370);
jake.addAnimation("running",jakeImg);
jake.scale=0.05;

right_boundary=createSprite(50,200,10,400)
right_boundary.visible=false;

bomb = createSprite(200, -100);
bomb.addAnimation("bomb", bombImg);
bomb.scale = 0.05;
bomb.velocityY = 8;
bomb.tint = rgb(255, 0, 0);

bomb1 = createSprite(120, -300);
bomb1.addAnimation("bomb", bombImg);
bomb1.scale = 0.05;
bomb1.velocityY = 8;
bomb1.tint = rgb(255, 0, 0);

bomb2 = createSprite(280, -400);
bomb2.addAnimation("bomb", bombImg);
bomb2.scale = 0.05;
bomb2.velocityY = 8;
bomb2.tint = rgb(255, 0, 0);

coin = createSprite(200, 10);
coin.addAnimation("coin", coinImg);
coin.scale = 0.3;
coin.velocityY = 8;

coin1 = createSprite(120, 10);
coin1.addAnimation("coin", coinImg);
coin1.scale = 0.3;
coin1.velocityY = 8;

coin2 = createSprite(280, 10);
coin2.addAnimation("coin", coinImg);
coin2.scale = 0.3;
coin2.velocityY = 8;

energydrink = createSprite(200, 200);
energydrink.addAnimation("energy", energydrinkImg);
energydrink.scale = 0.05;
energydrink.velocityY = 10;

energydrink1 = createSprite(120, 600);
energydrink1.addAnimation("energy", energydrinkImg);
energydrink1.scale = 0.05;
energydrink1.velocityY = 10;

energydrink2 = createSprite(280, 100);
energydrink2.addAnimation("energy",energydrinkImg);
energydrink2.scale = 0.05;
energydrink2.velocityY = 10;

invisibleGround = createSprite(370, 200, 100, 400);
invisibleGround.visible = false;

invisibleGround2 = createSprite(40, 200, 100, 400);
invisibleGround2.visible = false;

score=0;

}

function draw() {
  background(0);
drawSprites();
if(path.y>400){
  path.y=height/2
}



if(coin.y>400){
  coin.y=height/9
}

if(energydrink.y>400){
  energydrink.y=height/9
}

if(bomb.y>400){
  bomb.y=height/9
}

if(bomb1.y>400){
  bomb1.y=height/9
}



if(jake.isTouching(bomb)){
  textsize=24;
  fill("blue");
 Text("You Lose",200,200);
}


jake.x=World.mouseX;


}
