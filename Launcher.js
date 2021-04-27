class Launcher{

constructor(bodyA,pointB){

var options = {

bodyA : bodyA,
pointB : pointB,
stiffness : 0.05

}

this.launcher = Constraint.create(options)

World.add(world, this.launcher)

}

attach(body){

this.launcher.bodyA = body

}

display(){
if(this.launcher.bodyA){
var point1 = this.launcher.bodyA.position
var point2 = this.launcher.pointB

line(point1.x,point1.y,point2.x,point2.y)
}
}

fly(){

this.launcher.bodyA = null

}

}