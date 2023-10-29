//normal pen, brush
let startX;
let startY;

//eraser
let startXe;
let startYe;

let strokeW;
strokeW = 1;

//lead pencil
let deviation;
deviation = 5;

function setup() {
  
  createCanvas(windowWidth, (windowHeight/100)*85, document.getElementById('p5Canvas'));
  ellipseMode(RADIUS);
}

function draw() {
  if (mouseIsPressed === true && (tool === "tool1" || tool === "tool6")) {
    stroke(document.getElementById("colorpicker").value);
    strokeWeight(strokeW*5);
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

  if (mouseIsPressed === true && tool === "tool2") {
    stroke(document.getElementById("colorpicker").value);
    strokeWeight(strokeW);
    for (let i = 0; i < deviation * 5; i++){
      point(mouseX + random(-strokeW*deviation, strokeW*deviation), mouseY + random(-strokeW*deviation, strokeW*deviation));
  }}

  if (mouseIsPressed === true && tool === "tool5") {
    let radius = strokeW*100;
    let h = 0;
    for (let r = radius; r > 0; --r) {
      const colorSelected = color(document.getElementById("colorpicker").value);
      colorSelected.setAlpha(h);
      fill(colorSelected)
      noStroke();
      ellipse(mouseX, mouseY, r, r);
      h = (h + 0.01);
    }
}
  if (mouseIsPressed === true && tool === "tool4") {
    stroke(document.getElementById("p5Canvas").style.background);
    strokeWeight(strokeW*5);
    if (startXe == null) {
      startXe = mouseX;
      startYe = mouseY;
    }
    
    line(startXe, startYe, mouseX, mouseY);
    startXe = mouseX;
    startYe = mouseY;
  }
  else {
    startXe = null;
  }
}

