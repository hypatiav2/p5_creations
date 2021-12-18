function setup(){
  var myCanvas = createCanvas(windowWidth, windowHeight);
  var canvas1 = document.getElementById("defaultCanvas0");
  canvas1.style.padding = "0px";
  background(10);
}


let theta;

function draw() {
    background(10);
    frameRate(30);
    stroke(255);
    let a = (mouseY / height) * 90;
    // Convert it to radians
    theta = radians(a);
    translate(width/2,height);
    line(0,0,0,-120);
    translate(0,-120);
    branch(120);
}

function branch(h) {
  h *= 0.66;
  if (h > 2) {
    push();
    rotate(theta);   // Rotate by theta
    line(0, 0, 0, -h);  // Draw the branch
    translate(0, -h); // Move to the end of the branch
    branch(h);       // draw two new branches!!
    pop(); 

    push();
    rotate(-theta);
    line(0, 0, 0, -h);
    translate(0, -h);
    branch(h);
    pop();
  }
}
