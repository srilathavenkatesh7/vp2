class Foodstock{
    constructor(){
        this.foodStock=0;
        this.lastFed;
        this.image=loadImage("images/milk.png");
    }

getFoodStock(){
  return this.foodStock  
    
    
}

    updateFS(foodStock){
 this.foodStock=foodStock

    }
    getFedTime(lastFed){
this.lastFed=lastFed;
    }
   deductFood(){
       if(this.foodStock>0){
           this.foodStock=this.foodStock-1;
       }
   }
   display(){
      var x=80,y=100; 
      if(this.foodStock!==0){

       
      for(var i=0;i<this.foodStock;i++){
          if(i%10===0){
              x=80;
              y=y+50
          }
        imageMode (CENTER);
        image (this.image,x,y,50,50);
        x=x+30;
          }
        }
     }
     
   }

 