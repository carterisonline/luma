//! import module = require('p5');
//! import * as p5Global from 'p5/global'
//! import * as p5 from 'p5'

const code = `
  String s = "Hello"
  Numeric i = 1
  Boolean b = true
  Array<Numeric> a = [1, 2, 3]
  *Numeric ip = *i
  Atomic<Boolean> ab = &true
  Void v = void
  Atom at = :hello
`;

function setup(): void {
  let prog = new Program(code);
  console.log("P5 is running!");
}
