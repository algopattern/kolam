---
title: Kolam Experiments
authors: Anu Reddy; Alex McLean
---

Kolam is a South Indian heritage folk art, a line drawing that creates winding, interwoven, symmetrical patterns over a two-dimensional dot-grid structure. During a 10-day research residency, we (Alex and Anu) conducted a series of Kolam experiments building on the Algorithmic Pattern theme. We approached Kolam from multiple perspectives, including material, embodied, computational, structural, and rhythmic. We outline key learnings from these experiments in the hope that they inspire folks to explore heritage patterns through unconventional modes of making.

Note: We work with Kambi Kolam, a type of Kolam drawn in a single continuous line. For more background on this project, check out Reddy and Anuradha. 2023. “Kambi Kolam as Algorithmic Pattern.” In Algorithmic Pattern
Salon. Then Try This. https://doi.org/10.21428/108765d1.3bcd31e8

## Machine embroidery for handsewn Kolams

Anu's main aim for the residency was to explore the possibility of handsewing kolams supported by a Sashiko-inspired embroidery structure (Sashiko is traditional Japanese embroidery or stitching). By bringing these two structures together - looping kolams structures, which are normally drawn, with textile embroidery structures, we quickly hit all the challenges involved with
integrating two very different structures.

Facing these challenges involved learning to think like our embroidery machine; using a thread to draw a single line around the fabric, with each stitch creating a structural bind point in our structure. We began by working directly in the free/open Inkscape software, specifying each stitch as drawn vectors and using the Inkstitch plugin to export the drawings into embroidery files (.pes) for sending to the embroidery machine (Brother NV2600). Inkscape includes useful facilities for duplicating drawn shapes following symmetrical patterns, but for full control of the arrangement and order of stitches, we quickly moved to automate the drawing using the free/open source p5.js software. There is a library available for p5.js for creating embroidery files directly, but we found it best to output our stitch vectors using the SVG format, then use Inkscape/Inkstitch check and make final adjustments to the stitches, and export
the embroidery file from there.

The first attempt interwove the kolam thread in the inner stitches of the embroidered Sashiko 'star'. However, as pictured, this did not hold the Kolam curves well.

![alt-text](./images/Kolam_inner_stitches.jpg)

The next attempt incorporated stitches outside the Sashiko star, and the interweaving created Kolam in Lusona style (a Kolam-like artform from Angola), creating straight edges rather than curves.

(image)

Anu then returned to a hand-sewn Sashiko method as the base structure, which helped us understand which structural binding points the machine needed to reinforce to achieve a Kolam. At this stage, we also discovered that an nxn Kolam is best achievable with a double-sized embroidered structure, i.e., 2nx2n. We were then able to adjust the grid and sewing method to find a structure that worked well. 

(image)

For the final iteration, we attempted to create a Kolam as large as possible within the dimensions of the machine embroidery hoop and center it on the nxn embroidery grid. So, for a 15x15 embroidered grid, we could thread a 7x7 Kolam (n/2*n/2 - 1).  

### Hand embroidery

There were clear trade-offs between machine and hand embroidery throughout this work. The embroidery machine could create our grids very quickly, but it can only perform the limited range of stitches possible with a single needle that can only move up and down. For example, it would have been very useful to have been able to create a line of embroidered stitches that alternated between
passing over and under previously embroidered threads. Unfortunately, embroidery machines can only stitch on top of what has gone before.

(photo - check with Toni)

A highlight of the residency was visiting the studio of Sheffield-based textile artist and technologist Toni Bucky. Toni's long practice and recent PhD research focus on blackwork embroidery, and she has deep knowledge of hand-sewing structures, including the possibilities of their integration with electronics (e-textiles). She introduced us to terminology and techniques around 'whipped stitches', which turns out to be what we are trying to achieve with hand-sewing kolam into machine-embroidered grid structures. Here the sewing
structures and the structure of threads become interdependent, and Toni was able to advise on both the stitch paths as well as the use of single-strand pearl cotton to achieve the right result.

## Automated (and therefore simplified) Kolam drawing

Kolams are typically drawn with a set of hand moves or gestures. Alex wanted to create Kolams in p5.js using Bezier curves—straight, left, and right moves and repeats for symmetry. He aimed to automate Kolam drawings by translating the hand moves into simple computer commands. 

(image)

This made it possible to explore other visual dimensions of Kolam, which is challenging to achieve in real life, particularly the Z dimension as a passage of time. 

(image)

We then utilised the exact language of repetition and symmetry to create 3-dimensional Kolam spirals. 

(image)

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
