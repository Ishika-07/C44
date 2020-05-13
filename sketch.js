const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var bgImg;
var fishImg,fish2Img;
var player,playerImg;
var bubble,bubbleImg;

var score = 0;

var fish1Group,fish2Group;
var fish;

function preload(){
bgImg=loadImage("image/oceanbg.jpg");
fishImg = loadImage("image/yellowfish.gif");
fish2Img = loadImage("image/fish4.png");
playerImg = loadImage("image/fish.jpg");
bubbleImg  =loadImage("image/bubble.png");

}
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    player = createSprite(100,200);
    player.scale = 0.2;
    player.addImage(playerImg);
   
  fish1Group = createGroup();
  fish2Group = createGroup();

   // ground = Bodies.rectangle(200,390,200,20,ground_options);
   // World.add(world,ground);

  //  console.log(ground);
}

function draw(){
    background(bgImg);
    Engine.update(engine);

    player.y = mouseY;

    if (keyDown("space")){
    bubbles();
    }

    spawnFish();
    spawnFish2();
    console.log("fish");
    if(bubble.isTouching(fish)){
      console.log("string");
        fish.destroy();
        score++;
    }

    fill(0);
   textSize(20);
   text("Score:"+score,300,50);

  //rectMode(CENTER);
   // rect(ground.position.x,ground.position.y,400,20);
   drawSprites();
   
}
function spawnFish(){
    if(frameCount%60===0){
    fish = createSprite(400,random(0,400),20,20);
    fish.addImage(fishImg);
    fish.scale =0.1;
    fish.velocityX = -5;
    fish.lifetime = 80;

    fish1Group.add(fish);
    }
}
function spawnFish2(){
    if(frameCount%40===0){
        var fish2 = createSprite(400,random(0,400),20,20);
        fish2.addImage(fish2Img);
        fish2.scale =0.2;
        fish2.velocityX = -5;
        fish2.lifetime =80;

        fish2Group.add(fish2);
    }
}
function bubbles(){
    bubble = createSprite(100,200);
    bubble.scale = 0.5;
    bubble.addImage(bubbleImg);
    bubble.velocityX = 3;
    bubble.y= mouseY ;

}