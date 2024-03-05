# Kolam experiments

Kolam is a South Indian heritage folk art form. It is a form of line drawing that creates winding, interwoven patterns over a two-dimensional dot-grid structure. During a 10-day research residency, we (Alex and Anu) conducted a series of Kolam experiments building on the Algorithmic Pattern theme. We approached Kolam from multiple perspectives, including material, embodied, computational, structural, and rhythmic. We outline key learnings from these experiments in the hope that they inspire folks to explore heritage patterns through unconventional modes of making.

Note: We work with Kambi Kolam, a type of Kolam drawn in a single continuous line. For further background on this project, check out Reddy, Anuradha. 2023. “Kambi Kolam as Algorithmic Pattern.” In Algorithmic Pattern Salon. Then Try This. https://doi.org/10.21428/108765d1.3bcd31e8.       

## Hand embroidery

Toni Buckby’s home studio visit - the whipping stitch w.r.t the stitch path and
use of single strand pearl cotton

## Machine embroidery for handsewn kolams

Learning to think like an embroidery machine - creating the grid entirely in a
single go - it was easier to do the grid in p5.js code than in Inkscape, but we
also learned that it’s easier to visualize how it embroiders in Inkstitch
simulator from the coded svg

- Working with inner stitches with an interweaving approach didn’t work because it couldn’t hold down the kolam curves
- Working with the outer stitches ended up in lusona style (less curves, more straight lines and edges) - but it gave us the idea of using outer stitches
- Using outer stitches to produce n grid kolam within nxn embroidery grid ended up badly because the straight lines didn’t align with the grid structure, BUT n/2 - 1 grid kolam worked well for a nxn grid
- Going back to Hand-made Sashiko method helped to understand what stitch points need to be reinforced by the machine to achieve a n/2 - 1 grid kolam

## Automated (and therefore simplified) kolam drawing

Drawing kolam in p5.js - straight, left, right moves and repeats for symmetry

3D Kolam spirals - Z dimension as passage of time

## Strudel kolam

Different perspectives on turning:

- Relative to the draw-er (straight plus left/right, or clockwise/anticlockwise)
- Relative to the last turn (straight plus in/out)
- Relative to the grid points (straight plus only turn - turn direction inferred
  from Kambi Kolam rules)

### Rhythm

Manipulating rhythmic density

- Straight/linear per step
- Per sequence of turns/straights

Sonification mid-movement

## Future

Add to strudel-oriented alpaca tutorial series

Kolam with an e-textile grid - cap sense touch board with sewable LEDs to visualize points of intersection
