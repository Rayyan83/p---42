
var hr,mn,sc, hrAngle,mnAngle,scAngle;





function setup() {
  createCanvas(400,400);
angleMode(DEGREES);

}

function draw() {
  background(0);  

 translate(200,200);
 rotate(-90);
 hr = hour();
 mn = minute();
 sc = second();
 scAngle = map(sc,0,60,0,360) ;
 mnAngle = map(mn,0,60,0,360);
 hrAngle = map(hr%12,0,12,0,360);

push()
rotate(scAngle)
stroke("red");
strokeWeight(7);
line(0,0,100,0);
pop()

push()
rotate(mnAngle)
stroke("blue");
strokeWeight(7);
line(0,0,75,0);
pop()

push()
rotate(hrAngle)
stroke("green");
strokeWeight(7);
line(0,0,50,0);
pop()

push()
stroke("white");
strokeWeight(8);
noFill();
ellipse(0,0,200,200)
pop();

}