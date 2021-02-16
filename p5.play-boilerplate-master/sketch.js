
var fixedRect,movingRect;
var itzmeRiyaaa, dogs4life, asdfghjkl


function setup() {
  createCanvas(800,400);

 fixedRect =  createSprite(400, 200, 50, 50);
 movingRect = createSprite(200,100,80,20);
 fixedRect.shapeColor = "blue";
 movingRect.shapeColor = "pink"
itzmeRiyaaa = createSprite(200,350,60,70 )
dogs4life = createSprite(700,300,80,60)
asdfghjkl = createSprite(550,100,90,50)
itzmeRiyaaa.shapeColor = "yellow";
dogs4life .shapeColor = "red";
asdfghjkl.shapeColor = "purple"
}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  //function calling
  if(Touchbetween2rects(movingRect, itzmeRiyaaa)){
    itzmeRiyaaa.shapeColor = "white";
    movingRect.shapeColor = "green"
}
else{
  itzmeRiyaaa.shapeColor = "yellow";
  movingRect.shapeColor = "pink"
}
    
  

  drawSprites();
}

//function definition
function Touchbetween2rects(CoolCucumbers,gotobeach){

  if (gotobeach.x - CoolCucumbers.x < gotobeach.width/2 + CoolCucumbers.width/2 
    && CoolCucumbers.x - gotobeach.x < gotobeach.width/2 + CoolCucumbers.width/2 
     && CoolCucumbers.y - gotobeach.y < gotobeach.height/2 + CoolCucumbers.height/2
     && gotobeach.y - CoolCucumbers.y < gotobeach.height/2 + CoolCucumbers.height/2)
{
return true;
}

else{
return false;
 
}

} 
