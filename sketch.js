var hr, mn, sc;



function setup() {
  createCanvas(400,400);

 angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  

  //translation and rotation
  translate(200,200);
  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();

// map function to written here


//draw seconds hand 
scAngle = map(sc,0,60,0,360);
push();
rotate(scAngle);
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);
pop();

mnAngle = map(mn,0,60,0,360);
push();
rotate(mnAngle);
stroke(255,255,0);
strokeWeight(7);
line(0,0,120,100);
pop();

hrAngle = map(hr,0,60,0,360);
push();
rotate(hrAngle);
stroke(200,200,0);
strokeWeight(7);
line(0,0,150,200);
pop();

  drawSprites();
}