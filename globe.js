var earthMap;
var earthRadius = 250; //6,371km

var scaledKm = earthRadius/6371;
var distanceDownscale = 10; //distance not to scale :(
var lunarDistance = 500;


function preload() {
	earthMap = loadImage("earthmap.jpg");
}

function setup() {
  button = createButton('toggle');
  button.position(40, 30);
  button.mousePressed(toggle);
  button.style('width', '80px');
  button.style('height', '30px');
  button.style('line-height', '0');
  button.style('padding', '6px');
  button.style('color', ' #f0f0f0');
  
  

  button2 = createButton('+');
  button2.position(40, 60);
  button2.mousePressed(zoomin);
  button2.style('width', '40px');
  button2.style('height', '20px');
  button2.style('padding', '0px');
  button2.style('color', '#f0f0f0');
  button2.style('line-height', '0');

  button3 = createButton('−');
  button3.position(80, 60);
  button3.style('width', '40px');
  button3.style('height', '20px');
  button3.style('padding', '0px');
  button3.style('color', '#f0f0f0');
  button3.style('line-height', '0');
  button3.mousePressed(zoomout);
  

	createCanvas(windowWidth, windowHeight, WEBGL);
	easycam = new Dw.EasyCam(this._renderer, {distance : lunarDistance});
	background(10);
  var canvas1 = document.getElementById("defaultCanvas0");
  canvas1.style.padding = "0px";
  noStroke();
}

let value = 1;

function draw() {
  easycam.setWheelScale(0);
  easycam.setDistanceMax(600);
  easycam.setDistanceMin(340);
  strokeWeight(0.3);
	var earthRotation = frameCount/1.1;
	background(10);
	push();
	rotateY(radians(earthRotation));
	texture(earthMap);
	ambientLight(150);
	let dirX = (mouseX / width - 0.5) * 8;
  let dirY = (mouseY / height - 0.5) * 8;
	directionalLight(255, 255, 255, -dirX, -dirY, -1);
	sphere(earthRadius,24,24);
	pop();
	rotateY(-1.8+radians(earthRotation/27));

}

function toggle() {
  if (value === 0) {
    noStroke();
    earthMap = loadImage("earthmap.jpg");
    value = 1;
  } else if (value === 1) {
    noStroke();
    earthMap = loadImage("earthmap1.jpg");
    value = 2;
  } else if (value == 2) {
    earthMap = loadImage("earthmap2.jpg");
    stroke(75);
    value = 3;
  } else if (value == 3) {
    noStroke();
    earthMap = loadImage("earthmap3.jpg");
    value = 4;
  } else if (value == 4) {
    noStroke();
    earthMap = loadImage("earthmap4.jpg");
    value = 0;
  }
}

function zoomin() {
  easycam.zoom(-20);
}

function zoomout() {
  easycam.zoom(20);
}
