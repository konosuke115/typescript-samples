export {};

let numbers: number[] = [1, 2, 3];
console.log({ numbers });

let numbers2: Array<number> = [1, 2, 3];
console.log({ numbers2 });

let strings: string[] = ['TOKYO', 'OSAKA', 'KYOTO'];
console.log({ strings });

let nijigen: number[][] = [
  [10, 20],
  [30, 40]
];
console.log({ nijigen });

let hairetsu: (string | number | boolean)[] = [1, false, 'Japan'];
console.log({ hairetsu });
