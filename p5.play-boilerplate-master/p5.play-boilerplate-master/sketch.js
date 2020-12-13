var fixed,moving

function setup() {

  createCanvas(1200,600);

  fixed=createSprite(600,400,100,50)
  moving=createSprite(650,450,100,50)

  fixed.shapeColor="red";
  moving.shapeColor="red";

  fixed.debug=true;
  moving.debug=true;

}

function draw() {

  background(0,255,0);  
  moving.x=mouseX;
  moving.y=mouseY;

  if(fixed.x-moving.x<fixed.width/2+moving.width/2 && moving.x-fixed.x<fixed.width/2+moving.width/2
    && fixed.y-moving.y<fixed.height/2+moving.height/2 && moving.y-fixed.y<fixed.height/2+moving.height/2){
    fixed.shapeColor="blue";
    moving.shapeColor="black";
  

  }
  else{
    fixed.shapeColor="red";
  moving.shapeColor="red";


  }
  drawSprites();
}