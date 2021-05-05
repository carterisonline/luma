//! import module = require('p5');
//! import * as p5Global from 'p5/global' 
//! import * as p5 from 'p5'

let i: Array<number>;
let j: p5.Vector;

function setup() {
  console.log("🚀 - Setup initialized - P5 is running");
  print("Hello, World!");
  // FULLSCREEN CANVAS
  createCanvas(400, 400);

  i = new Array();
  i.push(10);

  j = createVector();

  // SETUP SOME OPTIONS
  rectMode(CENTER).noFill().frameRate(30);
}
function draw() {
  push();
  background(0);
  pop();
}