//! import module = require('p5');
//! import * as p5Global from 'p5/global' 
//! import * as p5 from 'p5'

let i: Array<number>;
let j: p5.Vector;

function setup(): void {
  console.log("🚀 - Setup initialized - P5 is running");
  print("Hello, World!");
  createCanvas(600, 600);

  i = new Array();
  i.push(10);

  j = createVector();

  rectMode(CENTER).noFill().frameRate(30);
}
function draw(): void {
  push();
  background(0);
  pop();
}