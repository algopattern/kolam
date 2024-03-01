// (c) Anuradha Reddy and Alex McLean 2024
// Shared under the terms of the GNU Affero General Public License v3

const cellw = 35;
const cells = 20;
const offset = 0;
const w = cellw * cells;
const cellwh = cellw / 2;
const gap = Math.sqrt(0.5) - 0.5;

const middle = (cells * cellw) / 2;

function setup() {
  createCanvas(1024, 1024, SVG); // Create SVG Canvas
  strokeWeight(1);
  stroke(255, 0, 0, 50);
  noFill();
  noLoop();
}

let frame = 0;

function straight(offset) {
  let m = cells / 2;
  for (let x = 0; x < m; ++x) {
    beginShape();
    for (let y = 0; y < cells; ++y) {
      vertex(m - x * 2, m - y);
      if (y % 2 == offset) {
        vertex(m - x * 2, m - y - 1);
        vertex(m - x * 2, m - y);
      }
    }
    vertex(m - x * 2, m - cells);
    endShape();
    beginShape();

    vertex(m - (x * 2 + 1), m - cells);
    for (let y = cells - 1; y >= 0; --y) {
      vertex(m - (x * 2 + 1), m - y);
      // if (y%2==0 &&  x%2==0) {
      //   vertex(m-(x*2+1),m-y-1);
      //   vertex(m-(x*2+1),m-y);
      // }
    }
    endShape();
  }
}

function diagonal() {
  for (let i = 0 - (cells - 1); i < cells; ++i) {
    var y = (0.5 + gap) * i;
    var w = cells - abs(i);

    var flip = i % 2 == 0 ? 1 : -1;

    beginShape();
    vertex(flip * (w / 2 + gap * (w + 1)), y);

    vertex(flip * (w / 2 + gap * (w - 1)), y);
    vertex(flip * (w / 2 + gap * (w + 1)), y);

    for (let x = 0; x < w; ++x) {
      vertex(flip * (w / 2 + gap * (w - (1 + x * 2)) - x), y);
      vertex(flip * (w / 2 + gap * (w - (1 + x * 2)) - (1 + x)), y);
      vertex(flip * (w / 2 + gap * (w - (3 + x * 2)) - (x + 1)), y);
      vertex(flip * (w / 2 + gap * (w - (1 + x * 2)) - (1 + x)), y);

      // if (!(x%2==1) && (i%2==0)) {
      // vertex(flip*((w/2)+(gap*(w-(1+x*2)))-x),y);
      // vertex(flip*((w/2)+(gap*(w-(1+x*2)))-(1+x)),y);
      // }
    }

    vertex(flip * (w / 2 + gap * (w - (1 + w * 2)) - w), y);
    endShape();

    y = (0.5 + gap) * -4;
  }
}

function draw() {
  scale(cellw);
  translate(cells / 2 + 1, cells / 2 + 1);
  stitchcount = 0;

  straight(1);
  translate(0.5, 0.5);

  translate(0, -1);
  rotate(HALF_PI);
  straight(0);
  translate(0.5, 0);

  rotate(HALF_PI / 2 + PI);
  diagonal();

  rotate(HALF_PI);
  diagonal();

  save("grid.svg");
  print("saved svg");
}
