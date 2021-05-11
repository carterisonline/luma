class Program {
  source: String;
  globals: Variable.Interface[];
  parse(): void {
    // Parse individual lines
    let lines = this.source.split("\n");

    // Remove newlines and trim down whitespace
    lines = lines.filter((s) => s !== "").map((s) => s.trim());
    for (let l of lines) {
      for (let type of Variable.Types) {
        // @ts-ignore: startsWith() is completely fine, ts.
        if (l.startsWith(type.type)) {
          console.log(`${l} is a ${type.type}!`);
        }
      }
    }
  }

  constructor(source: String) {
    this.source = source;
    this.globals = [];
    this.parse();
  }
}
