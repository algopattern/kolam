// (c) Anuradha Reddy and Alex McLean 2024
// Shared under the terms of the GNU Affero General Public License v3

// control point distance
// ref https://stackoverflow.com/questions/1734745/how-to-create-circle-with-b%C3%A9zier-curves
let cpd;
let cellw = 15;
let cells = 50;

// let path = "srrlsrllllr".repeat(1);

let path = "lllssssllsssrrrssrsllsssslllsrrssssrrssrslsrrsss".repeat(1);

let zdist = 32 / path.length;

// Move the mouse left and right to see the curve change
function setup() {
  createCanvas(cells * cellw, cells * cellw, WEBGL);
  noFill();
  cpd = (4 * (sqrt(2) - 1)) / 3;
  camera(0, 0, 400);
  colorMode(HSB, 1);
}

function right() {
  beginShape();
  vertex(0, 0, 0);
  bezierVertex(0, 0 - cpd, 0, 1 - cpd, -1, zdist, 1, -1, zdist);
  endShape();
  rotate(HALF_PI);
  translate(-1, -1, zdist);
}
function left() {
  beginShape();
  vertex(0, 0, 0);
  bezierVertex(0, 0 - cpd, 0, -1 + cpd, -1, zdist, -1, -1, zdist);
  endShape();
  rotate(-HALF_PI);
  translate(1, -1, zdist);
}
function straight() {
  beginShape();
  vertex(0, 0);
  vertex(0, 2, zdist);
  translate(0, -2, -zdist);
  endShape();
}

function draw() {
  background(255);
  scale(cellw);
  rotateX(millis() / 10000);
  rotateY(millis() / 7000);
  rotate(HALF_PI / 2);
  noStroke();
  fill(0);
  // circle(10,11,0.25);
  noFill();
  stroke(0);
  strokeWeight(32 / cellw);

  for (let i = 0; i < path.length; i++) {
    let h = i / (path.length - 1);
    // stroke((millis()/10000+h)%1,1-abs((h*2)-1),1);
    switch (path.charAt(i)) {
      case "r":
        right();
        break;
      case "l":
        left();
        break;
      case "s":
        straight();
        break;
    }
  }
}
