let carX = 0;
let speed = 2;
let message = "INDIA IS ON THE MOON";   // Text to display
let displayTime = 120;  // Time in frames to display the text
let alpha = 255;   // Initial alpha (transparency) value

function setup() {
  createCanvas(400, 400);
  background(0)
}

function draw() {
  background(0);
  
  {//draw moon
  noStroke();
   fill(255)
  ellipse(160,540,645);
  fill(240)
  ellipse(170,540,630);
  fill(200)
  ellipse(200,550,600);
  fill(150);
  ellipse(10,400,80)
  ellipse(300,350,80)
  ellipse(350,400,30)
  ellipse(100,300,30);
  fill(100);
  ellipse(20,390,50);
  ellipse(305,360,60);
  ellipse(105,300,20);
  ellipse(400,340,30)
  fill(150,200,255);
  ellipse(350,50,40);
}
  
 { //draw earth
  fill(25,100,55)
  let centerX = 340;
  let centerY = 50;
  let radius = 10;
  let startAngle = 40;  
  let endAngle = 10;
  arc(centerX, centerY, radius * 2, radius * 2, startAngle, endAngle);
  fill(25,100,55)
  circle(360,50,20);
  circle(355,60,10)
  circle(337,45,10)
  circle(342,60,6)
  circle(355,35,4);
  
  fill(255,80)
  circle(15,200,10);
  circle(200,200,8)
  fill(255);
  circle(50,100,15)
  circle(380,200,6)
  fill(255,60)
  circle(355,250,4);
  circle(250,80,6)
  circle(180,30,4);
  circle(399,0,15)
 
}
{ //draw lander
  stroke(1);
  fill(color('gold'))
  quad(150,200,220,220,220,280,150,250);
  quad(220,280,250,240,250,200,220,220);
  quad(220,220,250,200,210,195,150,200);
  fill(0,0,0,150)
  quad(160,203,200,214,200,271,160,254);
  fill(0)
  line(160,254,140,280);
  line(205,274,205,315);
  line(240,254,250,265);
  //draw shadows of stands
  line(205,315,240,260);
  line(188,265,140,280);
  line(260,245,250,264);
  //draw slide for lander
  fill (color('gold'));
  quad(100,300,140,350,200,271,160,254);
  fill(80,80)
  quad(108,310,131,339,190,267,168,257);
  //solar pannels
  
  quad(220,280,250,240,250,200,220,200);
   fill(color('gold'));
  let centerP = 205;
  let centerM = 212;
  let radius2 = 30;
  let startAngle2 = 60;  
  let endAngle2 = 3600;
  arc(centerP, centerM, radius2 * 2, radius2 * 2, startAngle2, endAngle2);
  fill(255);
  quad(160,170,130,130,180,195,178,200);
  quad(215,210,220,210,240,193,243,188);
  fill(150,35,200);
  ellipse(163,175, 10, 10);
  ellipse(244,188, 13, 13);
  // Draw the car body
  fill(color('gold'));
  quad(carX, 390, carX, 360,carX + 100,360,carX + 100,390);

  // Draw the wheels
  fill(150);
  ellipse(carX + 15, 390, 24);
  ellipse(carX + 80, 390, 24);
  carX += speed;
if (carX > 400)
  carX =-10;
 
    

}  

  }
