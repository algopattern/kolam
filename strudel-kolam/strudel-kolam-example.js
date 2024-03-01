// @title Space filling Kolam
// @by Alex McLean and Anuradha Reddy
// @thanks Felix Roos
// @license Affero GPL v3

// Run here: https://strudel.cc/?ILjjH6ILK2rA

// Press play to run!

Pattern.prototype.kolam = (await import('https://algopattern.github.io/kolam/strudel-kolam/kolam.js')).kolam;

// const p = "{r s l s r s l s r r s l s r r r s l s s l s s l l s r r s l s s s r r s l s r s s r r s l l s r r r s s s l l s r s l s s l l s r r s l s s s s l s s l s s l l s r r r s s s l s r r r s l s r s l s r x}%12";
// const p = "{s s s l l l s [r s] l}%12"
// const p = "{t s s s t s t s t t s s t t t s t s t t s t t s}%12"
// beanstalk
// const p = "{t <s t> <t t s>@2 <s t t>@3 s t t s t}%12"
// const p = "t!3 s!4 t!2 s!3 t!2 s!2 t s!2 t!2 s!3 t!2 s!4 t!3 s t [s x]".slow(4)
// const p = "t*3 s*4 t*2 s*3 t*2 s*2 t s*2 t*2 s*3 t*2 s*4 t*3 s t [s x]".slow(4)
const p = "{t s t s t s t s t t s t s t t t s t s s t s s t t s t t s t s s s t t s t s t s s t t s t t s t t t s s s t t s t s t s s t t s t t s t s s s s t s s t s s t t s t t t s s s t s t t t s t s t s t s [t x]}%12";

window.path = ''

stack(
  p.kolam().color("grey"),
  // s("bd cp"),
 sound(p.inhabit({t: "bd", s: "hh"}))
    .bank("RolandTR808").late(1/16),
 // n("0 [~ 2] 7 4 2 ~").sound("gm_taiko_drum")
).slow(2)
