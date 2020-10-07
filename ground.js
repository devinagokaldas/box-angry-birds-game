class ground {




constructor (x,y,width,height){
this.ground = Bodies.rectangle (x,y,width, height,{isStatic: true})
this.width = width
this.height = height 
World.add (world,this.ground)
}



display(){

var pos = this.ground.position;
fill ("green");
rectMode (CENTER);
rect (pos.x,pos.y,this.width,this.height);



}














}