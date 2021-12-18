let img;
      let smallPoint, largePoint;
      let slider;

      function preload() {
        img = loadImage('spiderverse.jpg');
      }

      function setup() {
        createCanvas(windowWidth, windowHeight)
        smallPoint = 4;
        largePoint = 40;
        imageMode(CENTER);
        noStroke();
        background(10);
        img.loadPixels();
        slider = createSlider(4, 40, 4);
        slider.position(800, 175);
        slider.style('width', '200px');
        slider.style("transform", "rotate(-90deg)");
        slider.addClass("myslider");

        var canvas1 = document.getElementById("defaultCanvas0");
        canvas1.style.padding = "0px";
        background(10);
        
      }

      function draw() {
        for (let i = 0; i < 10; i++) {
          let pointillize = slider.value();
          let x = floor(random(img.width));
          let y = floor(random(img.height));
          let pix = img.get(x, y);
          fill(pix);
          ellipse(x, y, pointillize, pointillize);
        }
      }
