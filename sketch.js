//Create variables here
var dog,happyDog,database,foodS,foodStock
function preload()
{
  //load images here
 dog1=loadImage("images/dogImg.png");
 dog2=loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500,500);
  dog=createSprite(250,220,40,40);
  dog.scale=0.2
  dog.addImage(dog1);
  database=firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

}


function draw() {  
background(rgb(46,139,87));
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dog2);
}
  drawSprites();
  //add styles here
  textSize (12);
  stroke (5);
  fill ("blue");
text ("NOTE:Use up_arrow to feed milk to the dog and make it happy",100,480);

}


function readStock(data){
foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
database.ref('/').update({
  Food:x
})
}


