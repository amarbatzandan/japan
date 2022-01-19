var box1
var box2
var box3
var box4
function setup() 
{
  createCanvas(400, 400);
  box1=new Box(100,100,50,50)
  box2=new Box(100,160,50,50)
  box3=new Box(160,100,50,50)
  box4=new Box(160,160,50,50)
}

function draw() 
{
  background(220);
box1.show();
box2.show();
box3.show();
box4.show();
box4.left();
box3.right();
box2.up();
box1.down();
box1.left();
}

