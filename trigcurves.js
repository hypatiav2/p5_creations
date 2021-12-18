function setup() {
  var myCanvas = createCanvas(windowWidth, windowHeight);
  var canvas1 = document.getElementById("defaultCanvas0");
  canvas1.style.padding = "0px";
  background(10);
  background(10);
  stroke(230, 188, 85);
  strokeWeight(2);
  noFill();


  button = createButton(' ');
  button.position(80, 150);
  button.mousePressed(toggle);
  button.style('width', '50px');
  button.style('height', '75px');
  button.style('border-color', 'rgba(20,10,10,0.1)');
}

let n = 0
let current = 1;
q = 0;

function draw(){
  if (current ===3) {
    background(10);
    drawShape(n, 200);
    n+=0.01;

  }  
}

function mouseMoved() {
  if (n<=10) {
    background(10);
    if (current === 1) {
      drawRhodoneaCurve(n,100);
      n+=0.01;
    }
    else if (current === 2) {
      drawMaurerRose(n, 50, 200);
      if (q==4) {
        n+=0.01;
        q = 0;
      }

    } 
  }
  q+=1;
}


function drawRhodoneaCurve(n, size){
    beginShape();
    for (let i = 0; i <= 360; i++) { 
        // equation of a rhodonea curve 
        let r = size * sin(radians(n * i)); 
  
        // cartesian conversion
        let x = r * cos(radians(i));
        let y = r * sin(radians(i)); 

        vertex(width / 2 + x, height / 2 + y);
    }  
    endShape();
}

//maurer rose with value n and d, size of size
function drawMaurerRose(n, d, size) {
  beginShape();
    for (let i = 0; i <= 360; i++) { 
        
        //equation of a maurer rose 
        k = i * d 
        r = size * sin(radians(n * k)) 
  
        // cartesian conversion
        x = r * cos(radians(k)) 
        y = r * sin(radians(k)) 
        vertex(width / 2 + x, height / 2 + y);
    }  
  endShape();
}

function drawShape(n, size) {
  let b = [0,2,3,4,5,6];
  for (const val of b) {
    noFill();
    beginShape(POINTS);
    for (let i = 0; i <= 360; i++) { 

      let r = tan((5/2)*radians(i)) + val; 

      // cartesian conversion
      let x = r * cos(radians(i-(n*100)));
      let y = r * sin(radians(i-(n*100))); 

      vertex((width / 2) + (x*100), (height / 2)+(y*100));

    }  
    endShape();
  }
  
}

function toggle() {
  fill(10);
  if (current == 3) {
    current = 1;
  } else {
    current = current + 1;
  }
  q = 0;
  n = 0;
}
 


