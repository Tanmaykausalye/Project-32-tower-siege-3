class Polygon{

    constructor(){
 
   var options={

    restitution : 0.5,
    density : 2

   }

  
    this.body = Bodies.circle(150,300,30,options)
 
    this.radius = 35
 
    this.image = loadImage("polygon.png")

    Matter.Body.setMass(this.body, this.body.mass*1.5)

   World.add(world, this.body)
 
    }
 
   display(){
 
    var pos = this.body.position
 

    ellipseMode(CENTER)
    ellipse(pos.x,pos.y,this.radius,this.radius)
    
  imageMode(CENTER)
  image(this.image,pos.x,pos.y,50,50)
 
   }
   
} 