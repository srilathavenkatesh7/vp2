//Create variables here
var dog,happyDog,database,foodS,foodStock,feed
var lastFed;
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
  foodObj=new Foodstock();
  database=firebase.database();
  feed=createButton("feed the dog");
  feed.position(200,100);
  feed.mousePressed(feedDog);
  addFood=createButton("add the food ");
  addFood.position(300,100);
  addFood.mousePressed(addFoodDog)
   
   
  
  foodStock=database.ref('Food').on("value",readStock);
}
function addFoodDog(){
  foodS=foodS+1
  database.ref('/').update({
    Food:foodS
})
}
function feedDog(){
dog.addImage(dog2);
foodObj.updateFS(foodObj.getFoodStock());
database.ref('/').update({
  Food :foodObj.getFoodStock(),
  lastFed : hour ()
})
}

function draw() {  
background(rgb(46,139,87));
foodObj.display();
lastFedTime=database.ref('lastFed').on("value",(data)=>{
  lastFed=data.val();

})
textSize (20);
fill ("black");
if(lastFed>=12){
 
  text("LastFed:"+lastFed%12+"pm",120,50);
}else if(lastFed===0){
text("LastFed:12 am",120,50);
}else{
  text("LastFed:"+lastFed+"am",120,50);
}

  drawSprites();
  //add styles here
 
  
}


function readStock(data){
foodS=data.val();
foodObj.updateFS(foodS);
}



