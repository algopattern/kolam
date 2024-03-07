---
title: Kolam Experiments
authors: Anu Reddy; Alex McLean
---

The following shares ongoing work initiated during a research residency at the
Then Try This studio in Sheffield during February 2024. In particular we
explored Kambi Kolam, based on ideas developed by Anu and shared in a
[presentation](https://www.youtube.com/watch?v=csBPGi1AfE8&list=PLxqmZjMvoVzzhyTQab_DCEqDIthsAiDzF&index=3&t=1320s)
and [paper](https://alpaca.pubpub.org/pub/xywz3ebv/) for the Algorithmic Pattern
Salon that took place in November 2023.

We share our progress by describing some of our design processes, and practical
outcomes including textile designs and software.

## Machine embroidery for handsewn kolams

Anu's main aim for the residency was to explore the possibility of handsewing
kolams, supported by a sashiko-style embroidery structure. By bringing these two
structures together - looping kolams structures which are normally drawn, with
textile embroidery structures, we quickly hit all the challenges involved with
integrating two very different structures.

Facing these challenges involved learning to think like our embroidery machine;
using a thread to draw a single line around the fabric, with each stitch
creating a structural bind point in our structure. We began by working directly
in the free/open Inkscape software, specifying each stitch as drawn vectors, and
using the Inkstitch plugin to export the drawings into embroidery files (.pes)
for sending to the embroidery machine (Brother NV2600). Inkscape includes useful
facilities for duplicating drawn shapes following symmetrical patterns, but for
full control of the arrangement and order of stitches, we quickly moved to
automate the drawing using the free/open source p5.js software. There is a
library available for p5.js for creating embroidery files directly, but we found
it best to output our stitch vectors using the SVG format, and then use
Inkscape/Inkstitch check and make final adjustments to the stitches, and export
the embroidery file from there.

The first attempt interwove the kolam thread in the inner stitches of
embroidered sashiko 'star'. However this did not hold the kolam curves well, as
pictured.

(image)

The next attempt instead used outer stitches, and the interweaving created kolam
in a more losona style, with straight edges rather than curves. Using outer
stitches to produce n grid kolam within nxn embroidery grid ended up badly
because the straight lines within kolams didn’t align with the grid structure,
BUT n/2 - 1 grid kolam worked well for a nxn grid.

(image)

Anu then went back to a hand-sewn Sashiko method as the base structure, which
helped us understand which stitch points need to be reinforced by the machine to
achieve a n/2 - 1 grid kolam. We were then able to make adjustments to the grid
and sewing method, to find a structure that worked well.

(image)

### Hand embroidery

There were clear trade-offs between machine and embroidery throughout this
work. The embroidery machine could comparatively create our grids very quickly,
but can only perform the limited range of stitches possible by a single needle
that can only move up and down. For example, it would have been very useful to
have been able to create a line of embroidered stitches that alternated between
passing over and under previously embroidered threads. Unfortunately, embroidery
machines can only stitch on top of what has gone before.

(photo - check with Toni)

A highlight of the residency was a visit to the studio of Sheffield-based
textile artist and technologist Toni Bucky. Toni's long practice and recent PhD
research focuses on blackwork embroidery, and she has deep knowledge of
handsewing structures, including the possibilities of their integration with
electronics (e-textiles). She introduced us to terminology and techniques around
'whipped stitches', which turns out to be what we are trying to achieve with
handsewing kolam into machine embroidered grid structures. Here the sewing
structures and the structure of threads become interdependent, and Toni was able
to advise on both the stitch paths, and the use of single-strand pearl cotton to
achieve the right result.

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
