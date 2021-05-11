namespace Variable {
  export const Types: Interface[] = [
    {
      type: "String",
      translate: (s: any) => {
        return (s as String).split("").map((c: String) => {
          if (c === '"') {
            return "'";
          } else {
            return c;
          }
        });
      },
      value: null,
    },

    {
      type: "Numeric",
      translate: (s: any) => `${s}`,
      value: null,
    },

    {
      type: "Boolean",
      translate: (s: any) => {
        return (s[0] as String).toUpperCase();
      },
      value: null,
    },

    {
      type: "Array",
      translate: (s: any) => `[${s}]`,
      value: null,
    },

    {
      type: "*",
      translate: (s: any) => `*${s}`,
      value: null,
    },

    {
      type: "Atomic",
      translate: (s: any) => `&${s}`,
      value: null,
    },

    {
      type: "Void",
      translate: (s: any) => ".",
      value: null,
    },

    {
      type: "Atom",
      translate: (s: any) => "${s}",
      value: null,
    },
  ];
  export interface Interface {
    type: String;
    translate: Function;
    value: any;
  }
}
