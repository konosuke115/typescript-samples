export {};

const func = (): number => 43;

let numberAny: any = func();
let numberUnknown: unknown = func();
console.log('numberUnknown: ', typeof numberUnknown);

let someAny = numberAny + 10;
console.log(someAny);

if (typeof numberUnknown === 'number') {
  let someAny2 = numberUnknown + 100;
  console.log(someAny2);
}
