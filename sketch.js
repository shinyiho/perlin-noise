var scl = 100;
var cols, rows;
var zoff = 0;
var particles = [];
var flowArr;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(255);
  cols = floor(width / scl);
  rows = floor(height / scl);
  flowArr = new Array(cols * rows);
  for (var i = 0; i < 3000; i++) {
    particles[i] = new Particle();
  }
}

function draw() {
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(0.51);
      flowArr[index] = v;
      xoff += 0.1;
      stroke(0, 50);
    }
    yoff += 0.1;
    zoff += 0.002;
  }

  for (var i = 0; i < particles.length; i++) {
    particles[i].follow(flowArr);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }
}
