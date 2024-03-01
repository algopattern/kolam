
// (c) Alex McLean and Anu Reddy
// Shared under the terms of the Afero GNU Public License v3

if (!window.path) {
  window.path = '';
}

function sketch(p) {
      const cpd = 4*(Math.sqrt(2)-1)/3;
      const cellw = 8;
      const cells = 50;
      const zdist = 32 / window.path.length;

      function right(p, pos) {
        p.beginShape();
        p.vertex(0,0);
        const bcoords = casteljau(0, pos, 0, 0, 0,0-cpd,1-cpd,-1,1,-1);
        p.bezierVertex(...bcoords.slice(2));
        p.endShape();
        p.rotate(Math.PI/2);
        p.translate(-1,-1);
      }
      function left(p, pos) {
        p.beginShape();
        p.vertex(0,0);
        const bcoords = casteljau(0, pos, 0, 0, 0,0-cpd,-1+cpd,-1,-1,-1);
        p.bezierVertex(...bcoords.slice(2));
        p.endShape();
        p.rotate(-(Math.PI/2));
        p.translate(1,-1);
      }
    function straight(p, pos) {
	stoggle = !stoggle;
        p.beginShape();
        p.vertex(0,0);
        p.vertex(0,2*pos);
        p.translate(0,-2*pos);
        p.endShape();
      }
    var toggle = false;
    var stoggle = false;
    function turnOut(p, pos) {
	toggle = !toggle;
	turnIn(p,pos);
    }
    function turnIn(p,pos) {
	if (toggle) {
	    left(p,pos);
	}
	else {
	    right(p,pos);
	}
    }
    function turn(p, pos) {
	if (stoggle) {
	    left(p,pos);
	}
	else {
	    right(p,pos);
	}
    }

      function casteljau(t0, t1, x1, y1, bx1, by1, bx2, by2, x2, y2) {
        const u0 = 1.0 - t0;
        const u1 = 1.0 - t1;

        const qxa =  x1*u0*u0 + bx1*2*t0*u0 + bx2*t0*t0;
        const qxb =  x1*u1*u1 + bx1*2*t1*u1 + bx2*t1*t1;
        const qxc = bx1*u0*u0 + bx2*2*t0*u0 +  x2*t0*t0;
        const qxd = bx1*u1*u1 + bx2*2*t1*u1 +  x2*t1*t1;

        const qya =  y1*u0*u0 + by1*2*t0*u0 + by2*t0*t0;
        const qyb =  y1*u1*u1 + by1*2*t1*u1 + by2*t1*t1;
        const qyc = by1*u0*u0 + by2*2*t0*u0 +  y2*t0*t0;
        const qyd = by1*u1*u1 + by2*2*t1*u1 +  y2*t1*t1;

        const xa = qxa*u0 + qxc*t0;
        const xb = qxa*u1 + qxc*t1;
        const xc = qxb*u0 + qxd*t0;
        const xd = qxb*u1 + qxd*t1;

        const ya = qya*u0 + qyc*t0;
        const yb = qya*u1 + qyc*t1;
        const yc = qyb*u0 + qyd*t0;
        const yd = qyb*u1 + qyd*t1;
        return [xa,ya,xb,yb,xc,yc,xd,yd];
      }

      p.setup = function() {
        const canvas = getDrawContext().canvas;
        p.createCanvas(canvas.width, canvas.height, p.P2D, canvas);
        p.noFill();
        // p.camera(0,0, 400);
        p.colorMode(p.HSB,1);
        
      };
      p.draw = function() {
        p.background(0);
        p.translate(400,0);
        p.scale(cellw);
        p.translate(cells/2,cells/2);
        p.rotate(Math.PI/4);
        p.stroke(255);
        p.strokeWeight(2/cellw);
        toggle = false;
        stoggle = false;
        for (let i = 0; i < window.path.length; i++) {
          let pos = 1;
          if (i == (window.path.length-1)) {
            const now = Date.now();
            pos = Math.max(0,Math.min(1, (now - window.draw_last_from) / window.draw_last_dur / 1000));
          }
          switch(window.path.charAt(i)) {
            case 'r':
              right(p, pos);
              break;
            case 'l':
              left(p, pos);
              break;
            case 'i':
              turnIn(p, pos);
              break;
            case 'o':
              turnOut(p, pos);
              break;
            case 's':
              straight(p, pos);
              break;
            case 't':
              turn(p, pos);
              break;
            case 'x':
              window.path = '';
              break;
          }
        }
      };
}

window.inited = window.inited ?? false;
if(!window.inited) {
  window.inited = true;
  await import('https://cdn.jsdelivr.net/npm/p5@1.9.0/lib/p5.js');
  new p5(sketch)
}

export const kolam = function () {
  return this.withHap((hap) => {
    const onTrigger = (time, hap, currentTime, cps) => {
      var direction = hap.value;

      const latency = 0.1
      const offset = (time - currentTime + latency) * 1000;

      const dur = hap.whole.duration / cps;
      
      window.setTimeout(function () {
        if (direction) {
          window.path += direction;
          window.draw_last_from = Date.now();
          window.draw_last_dur = dur;
        }
      }, offset);
    };
    return hap.setContext({ ...hap.context, onTrigger, dominantTrigger: true });
  });
};
