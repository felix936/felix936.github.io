let startX;
let startY;

function setup() {
  
  createCanvas(windowWidth, (windowHeight/100)*85, document.getElementById('p5Canvas'));
  background(0,0,0)
}

function draw() {
  if (mouseIsPressed === true) {
    stroke(document.getElementById("colorpicker").value);
    strokeWeight(5);
    if (startX == null) {
      startX = mouseX;
      startY = mouseY;
    }
    
    line(startX, startY, mouseX, mouseY);
    startX = mouseX;
    startY = mouseY;
  }
  else {
    startX = null;
  }
}
