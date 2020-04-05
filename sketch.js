var bg;
var player;
var ob1,ob2,ob3,ob4,ob5,ob6,ob7,ob8,ob9;
var tree1,tree1img;
var seed1,seed2,seed3,seed4,seed5,seed6,seed7,seed8,seed9;
var score = 0;
var advancements,advancements1;
var bg,bg1;
var notification,notifications1;
var count = 0;
var note;
var cov1,cov2,cov3,cov4,cov5,cov6,cov7;
var coverage;
var seedimg;
var usimg,chinaimg,russiaimg,australiaimg,sudanimg,brazilimg;
var us;
var gamestate="serve";
function preload() {
bg = loadImage("pictures/map2.png");
tree1img = loadImage("pictures/tree1.png");
cactusimg = loadImage("pictures/realcactus.png");
advancements1 = loadImage("pictures/advance.jpg");
notifications1 = loadImage("pictures/note.jpg");
coverage = loadImage("pictures/coverage.png");
seedimg = loadImage("pictures/seeds.png");
austaliaimg = loadImage("pictures/australia.png");
brazilimg = loadImage("pictures/brazil.png");
usimg = loadImage("pictures/us.png");
}

function setup() {
createCanvas(800,400);

//bg1 = createSprite(300,100,800,400);
//bg1.addImage(bg);
//bg1.width = 300;

advancements = createSprite(85,250);
advancements.addImage("advancements",advancements1);
advancements.scale = 0.3;
advancements.visible = false;

notification = createSprite(85,300);
notification.addImage("notification",notifications1);
notification.scale = 0.3;
notification.visible = false;

count1 = createSprite(150,120,30,30);
count1.visible = false;

us = createSprite(400,200,800,400);
us.addImage("us",usimg);
us.visible = false;

cov1 = createSprite(250,270,30,30);
cov1.visible = false;
cov1.addImage("cov1",coverage);
cov1.scale = 0.05;

cov2 = createSprite(150,100,30,30);
cov2.visible = false;
cov2.addImage("cov2",coverage);
cov2.scale = 0.05;

cov3 = createSprite(430,190,30,30);
cov3.visible = false;
cov3.addImage("cov3",coverage);
cov3.scale = 0.05;

cov4 = createSprite(480,135,30,30);
cov4.visible = false;
cov4.addImage("cov4",coverage);
cov4.scale = 0.04;

cov5 = createSprite(640,300,30,30);
cov5.visible = false;
cov5.addImage("cov5",coverage);
cov5.scale = 0.05;

cov6 = createSprite(600,125,30,30);
cov6.visible = false;
cov6.addImage("cov6",coverage);
cov6.scale = 0.05;

cov7 = createSprite(570,50,30,30);
cov7.visible = false;
cov7.addImage("cov7",coverage);
cov7.scale = 0.05;

 player = createSprite(200,200,3,3);
 player.visible = false;

 ob1 = createSprite(125,120,30,30);
 ob1.shapeColor = "green";
 ob1.addImage("ob1",tree1img);
 ob1.scale = 0.02;
 ob1.visible = false;

 ob2 = createSprite(230,250,30,30);
 ob2.shapeColor = "green";
 ob2.addImage("ob2",tree1img);
 ob2.scale = 0.02;
 ob2.visible = false;

 ob3 = createSprite(540,170,30,30);
 ob3.shapeColor = "green";
 ob3.addImage("ob3",tree1img);
 ob3.scale = 0.02;
 ob3.visible = false;

 ob4 = createSprite(365,80,30,30);
 ob4.shapeColor = "green";
 ob4.addImage("ob4",tree1img);
 ob4.scale = 0.02;
 ob4.visible = false;

 ob5 = createSprite(385,160,30,30);
 ob5.shapeColor = "green";
 ob5.addImage("ob5",cactusimg);
 ob5.scale = 0.02;
 ob5.visible = false;

 ob6 = createSprite(170,60,30,30);
 ob6.shapeColor = "green";
 ob6.addImage("ob6",tree1img);
 ob6.scale = 0.02;
 ob6.visible = false;

 ob7 = createSprite(680,300,30,30);
 ob7.shapeColor = "green";
 ob7.addImage("ob7",tree1img);
 ob7.scale = 0.02;
 ob7.visible = false;

 ob8 = createSprite(605,55,30,30);
 ob8.shapeColor = "green";
 ob8.addImage("ob8",tree1img);
 ob8.scale = 0.02;
 ob8.visible = false;

 ob9 = createSprite(410,275,30,30);
 ob9.shapeColor = "green";
 ob9.addImage("ob9",cactusimg);
 ob9.scale = 0.02;
 ob9.visible = false;

 seed1 = createSprite(125,120,30,30);
 seed1.shapeColor = "brown";
 seed1.visible = false;
 seed1.addImage("seed1",seedimg); 
 seed1.scale = 0.05;

 seed2 = createSprite(230,250,30,30);
 seed2.shapeColor = "brown";
 seed2.visible = false;
 seed2.addImage("seed2",seedimg); 
 seed2.scale = 0.05;
 
 seed3 = createSprite(540,170,30,30);
 seed3.shapeColor = "brown";
 seed3.visible = false;
 seed3.addImage("seed3",seedimg); 
 seed3.scale = 0.05;

 seed4 = createSprite(365,80,30,30);
 seed4.shapeColor = "brown";
 seed4.visible = false;
 seed4.addImage("seed4",seedimg); 
 seed4.scale = 0.05;
 
 seed5 = createSprite(385,160,30,30);
 seed5.shapeColor = "brown";
 seed5.visible = false;
 seed5.addImage("seed5",seedimg);
 seed5.scale = 0.05; 

 seed6 = createSprite(170,60,30,30);
 seed6.shapeColor = "brown";
 seed6.visible = false;
 seed6.addImage("seed6",seedimg); 
 seed6.scale = 0.05;

 seed7 = createSprite(680,300,30,30);
 seed7.shapeColor = "brown";
 seed7.visible = false;
 seed7.addImage("seed7",seedimg); 
 seed7.scale = 0.05;

 seed8 = createSprite(605,55,30,30);
 seed8.shapeColor = "brown";
 seed8.visible = false;
 seed8.addImage("seed8",seedimg); 
 seed8.scale = 0.05;

 seed9 = createSprite(410,275,30,30);
 seed9.shapeColor = "brown";
 seed9.visible = false;
 seed9.addImage("seed9",seedimg);
 seed9.scale = 0.05; 
}

function draw() {
background(bg);
 
player.x = mouseX;
player.y = mouseY;
text("Seeds:"+score,680,100);
if(player.isTouching(ob1)){
  ob1.visible = true;
  seed1.visible = true;
}

if(player.isTouching(ob2)){
  ob2.visible = true;
  seed2.visible = true;
}

if(player.isTouching(ob3)){
  ob3.visible = true;
  seed3.visible = true;
}

if(player.isTouching(ob4)){
  ob4.visible = true;
  seed4.visible = true;
}

if(player.isTouching(ob4)){
  ob4.visible = true;
  seed4.visible = true;
}

if(player.isTouching(ob5)){
  ob5.visible = true;
  seed5.visible = true;
}

if(player.isTouching(ob6)){
  ob6.visible = true;
  seed6.visible = true;
}

if(player.isTouching(ob7)){
  ob7.visible = true;
  seed7.visible = true;
}

if(player.isTouching(ob8)){
  ob8.visible = true;
  seed8.visible = true;
}

if(player.isTouching(ob9)){
  ob9.visible = true;
  seed9.visible = true;
}

if(mousePressedOver(seed1)){
  seed1.destroy();
  score = score+Math.round(random(1,3));
}

if(mousePressedOver(seed2)){
  seed2.destroy();
  score = score+Math.round(random(1,3));
}

if(mousePressedOver(seed3)){
  seed3.destroy();
  score = score+Math.round(random(1,3));
}

if(mousePressedOver(seed4)){
  seed4.destroy();
  score = score+Math.round(random(1,3));
}

if(mousePressedOver(seed5)){
  seed5.destroy();
  score = score+Math.round(random(1,3));
}

if(mousePressedOver(seed6)){
  seed6.destroy();
  score = score+Math.round(random(1,3));
}

if(mousePressedOver(seed7)){
  seed7.destroy();
  score = score+Math.round(random(1,3));
}

if(mousePressedOver(seed8)){
  seed8.destroy();
  score = score+Math.round(random(1,3));
}

if(mousePressedOver(seed9)){
  seed9.destroy();
  score = score+Math.round(random(1,3));
}

if(score >= 40 ){ 
  advancements.visible = true;
  notification.visible = true;
}

if(mousePressedOver(advancements)){
  cov2.visible = true;
  cov2.lifetime = 60;
  
  cov3.visible = true;
  cov3.lifetime = 140;

  cov4.visible = true;
  cov4.lifetime = 100;

  cov5.visible = true;
  cov5.lifetime = 180;

  cov7.visible = true;
  cov7.lifetime = 120;

  cov6.visible = true;
  cov6.lifetime = 200;

  cov1.visible = true;
  cov1.lifetime = 249;

}
if(mousePressedOver(cov1)){
  gamestate="play";
}
if(gamestate==="play"){
bg.visible=false;
   background(usimg);
}
drawSprites();
}