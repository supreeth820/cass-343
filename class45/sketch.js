var Spaceship;
var astroids;
var spaceshipImage;
var astroid1Img;
var astroid2Img;
var astroid3Img;
var astroid4Img;
var backgroundImg
var START=0;
var PLAY=1;
var END=2;
var gameState=START;

var asteroidGroup;

function preload(){
    spaceshipImage=loadImage("spaceship.png");
    astroid1Img=loadImage("astroid1.png");
    astroid2Img=loadImage("astroid2.png");
    astroid3Img=loadImage("astroid3.png");
    astroid4Img=loadImage("astroid4.png");
    backgroundImg=loadImage("background.jpg")
}

function setup(){
    createCanvas(600,600);
    Spaceship =createSprite(500,500,50,100);
    Spaceship.addImage(spaceshipImage);
    Spaceship.scale=0.3;

    //Spaceship.debug=true;
    Spaceship.setCollider("rectangle",0,0,300,300)

    asteroidGroup=new Group();

}

function draw(){
    background(backgroundImg);

    if(gameState===START){
        textSize(25);
        fill("white");
        text("Press space to start",200,100);
        text("Use mouse pointer to control the space ship",50,150);

    if(keyDown("space")){
        gameState=PLAY;

    }
        
 }


 if(gameState===PLAY){

 
    if(keyDown(RIGHT_ARROW)){
        Spaceship.x =Spaceship.x+3;
    }

    if(keyDown(LEFT_ARROW)){
        Spaceship.x =Spaceship.x-3;
    }

    SpawnAstroids();
     drawSprites();
     
     if(asteroidGroup.isTouching(Spaceship)){
        gameState=END; 

     }
 }

if(gameState===END){
    
Spaceship.velocityX=0;
asteroidGroup.setVelocityYEach(0);
fill("white");
textSize(50)
text("GameOver",170,250)

}


 
}

function SpawnAstroids(){
 if(frameCount %110===0){
     var astroids =createSprite(100,0,100,100);
     //astroids.debug=true;
     astroids.x =Math.round(random(20,570));
     astroids.velocityY=3;

     var num=Math.round(random(1,4));
     switch(num){
         case 1:
             astroids.addImage(astroid1Img);
             astroids.setCollider("circle",-10,-10,200)
             break;
             case 2:
             astroids.addImage(astroid2Img);
             astroids.setCollider("circle",0,45,90)
             break;
             case 3:
             astroids.addImage(astroid3Img);
             break;
             case 4:
             astroids.addImage(astroid4Img);
             astroids.setCollider("circle",-10,-10,110)
             break;
     }

     astroids.scale=0.5;
     astroids.lifetime=200;
     asteroidGroup.add(astroids);
 }   
}