const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var polygon
var ground1 
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, 
block13, block14, block15, block16

var  $block1, $block2, $block3, $block4, $block5, $block6, $block7, $block8, $block9, $block10,
 $block11, $block12, $block13, $block14, $block15, $block16 

var moon, moonImg

var score = 0 

//var gameState= launched

function  preload() {
  
moonImg  = loadImage("Moon.jpg")

}


function setup(){

createCanvas(1280,607)

   engine = Engine.create();
   world = engine.world;

 // Bodies should be created here

   moon = createSprite(80,40,30)
   moon.addImage("moonImg",moonImg)
   moon.scale = 0.1

   polygon = new Polygon()


  ground1 = new Ground(640,580,2480,)
  ground2 = new Ground(760,280,250)
  ground3 = new Ground(1080,480,250)
  launcher = new Launcher(polygon.body,{x:150, y:300})

  block1 = new Block(760,260)
  block2 = new Block(727,260)
  block3 = new Block(694,260)
  block4 = new Block(661,260)
  block5 = new Block(793,260)
  block6 = new Block(826,260)
  block7 = new Block(859,260)
  block8 = new Block(760,210);
  block9 = new Block(727,210)
  block10 = new Block(694,210)
  block11 = new Block(793,210)
  block12 = new Block(826,210)
  block13 = new Block(760,160);
  block14 = new Block(727,160)
  block15 = new Block(793,160)
  block16 = new Block(760,120)

  $block1 = new Block(1080,460)
  $block2 = new Block(1047,460)
  $block3 = new Block(1014,460)
  $block4 = new Block(981,460)
  $block5 = new Block(1113,460)
  $block6 = new Block(1146,460)
  $block7 = new Block(1179,460)
  $block8 = new Block(1080,410);
  $block9 = new Block(1047,410)
  $block10 = new Block(1014,410)
  $block11 = new Block(1113,410)
  $block12 = new Block(1146,410)
  $block13 = new Block(1080,360);
  $block14 = new Block(1047,360)
  $block15 = new Block(1113,360)
  $block16 = new Block(1080,320)
 
 Engine.run(engine)

}

function draw(){

background(20,31,66,50)

fill(237,237,240)
textSize(26)
text("launch the polygon and hit on the blocks", 425,40)

text("Score : "+ score,1100,50)

polygon.display()
ground1.display()
ground2.display()
ground3.display()
launcher.display()

block1.display()
block2.display()
block3.display()
block4.display()
block5.display()
block6.display()
block6.display()
block7.display()
block8.display()
block9.display()
block10.display()
block11.display()
block12.display()
block13.display()
block14.display()
block15.display()
block16.display()

$block1.display()
$block2.display()
$block3.display()
$block4.display()
$block5.display()
$block6.display()
$block7.display()
$block8.display()
$block9.display()
$block10.display()
$block11.display()
$block12.display()
$block13.display()
$block14.display()
$block15.display()
$block16.display()



block1.score()
block2.score()
block3.score()
block4.score()
block5.score()
block6.score()
block6.score()
block7.score()
block8.score()
block9.score()
block10.score()
block11.score()
block12.score()
block13.score()
block14.score()
block15.score()
block16.score()

$block1.score()
$block2.score()
$block3.score()
$block4.score()
$block5.score()
$block6.score()
$block7.score()
$block8.score()
$block9.score()
$block10.score()
$block11.score()
$block12.score()
$block13.score()
$block14.score()
$block15.score()
$block16.score()


drawSprites()

}

function mouseDragged(){

Matter.Body.setPosition(polygon.body,{x:mouseX, y:mouseY})

}

function mouseReleased(){

launcher.fly()

}

function keyPressed(){

if(keyCode === 32){

launcher.attach(polygon.body)

}

}
