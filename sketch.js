var runner,path,invisiblepath1,invisiblepath2
var jaxon,path1,path2,path_1;
var rightboundary,leftboundary;



function preload(){
  //pre-load image
jaxon_run = loadAnimation("Runner-1.png","Runner-2.png");
path_1 = loadImage("path.png");





}

function setup(){
  createCanvas(400,400);
  path1 = createSprite(200,200);
  path1.addImage(path_1);
  path1.velocityY=4;
path1.scale=1;



  //create sprites here
runner = createSprite(200,200,15,15);
runner.addAnimation("running",jaxon_run);
runner.scale=0.1;

leftboundary= createSprite(0,0,100,800);
rightboundary = createSprite(385,200,20,400);


leftboundary.visible=false;
rightboundary.visible=false;



}

function draw() {
  background(0);
runner.x=World.mouseX;
runner.collide(leftboundary);
runner.collide(rightboundary);


if (path1.y > 400){
  path1.y = path1.width/2;
}








drawSprites();

}
