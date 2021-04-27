class Block{

constructor(x,y, visibility){

var options ={

density : 1.2

}
this.body = Bodies.rectangle(x,y,30,40,options)
this.width  = 30
this.height = 40

this.visibility = 255

World.add(world, this.body)

}

display(){

  if(this.body.speed<5){  
var pos = this.body.position
var angle = this.body.angle

push()

translate(pos.x,pos.y)
rotate(angle)
fill(63,224,208)
rectMode(CENTER)
rect(0,0,this.width,this.height)
pop()}

else{

   
   push()
    this.visibility = this.visibility-5
    tint(255,this.visibility)
pop()
World.remove(world,this.body)
}


}

score(){
  if (this.visibility < 0 && this.visibility >= -105){
    score++;
  }

}
}