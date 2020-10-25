var mario, mario_image;
var ground;
var pillar_image;
var forest, forest_image;
var PillarGroup;
var WAIT = 0;
var gameState = WAIT;

function preload(){
  mario_image = loadAnimation("m.png","mario2.png");
  forest_image = loadImage("forest.png");
  pillar_image = loadImage("pillar_mario.png");
  //pillar1.visible = false;
  
}
function setup() {
  createCanvas(800,400);
  forest = createSprite(400,150,1500,1500);
  forest.addImage("image",forest_image);
  forest.scale=1.6
 //enemies = createSprite(400, 200, 50, 50);
  mario = createSprite(290,300,100,50);
  mario.addAnimation("animation",mario_image);
  mario.scale = 0.03;
  ground = createSprite(400,360,800,10);
  ground.visible = false;
  //pillar = createSprite(290,250,70,10);
  pillar1 = createSprite(900,320,70,10);
  PillarGroup = createGroup();
}

function draw() {
  background(255,255,255);  
  drawSprites();
 
 mario.collide(ground);
 if(keyDown(UP_ARROW)){
    mario.velocityY = -5;
    mario.addAnimation("animation",mario_image);
 }
 //if(keyDown(RIGHT_ARROW)){
   forest.velocityX = -5;
 //}
if(keyWentUp(RIGHT_ARROW)){
  forest.velocityX = 0;
  
}
if (forest.x < 0){
  forest.x = forest.width/2;
}
 mario.velocityY = mario.velocityY +0.8;
 mario.x = 100;
  spawnPillars();
 mario.collide(PillarGroup);
 //forest.scale = 1.5;
 
}
function spawnPillars(){
  if (World.frameCount % 275 === 0) {
    var pillar1 = createSprite(800,320,70,10);
    pillar1.addImage("pillars",pillar_image);
    pillar1.y = random(200,230);
    pillar1.scale = 0.3;
    pillar1.velocityX = -3;
    pillar1.lifetime = -1;
    mario.bounceOff(pillar1);
    pillar1.depth = mario.depth;
    mario.depth = mario.depth + 1;
    PillarGroup.add(pillar1);
}
}