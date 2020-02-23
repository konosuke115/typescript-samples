export {};

type Mojiretsu = string;

const fooString: Mojiretsu = 'Hello';
const barString: Mojiretsu = 'World';

// profile
type Profile = { name: string; age: number };
const example1: Profile = {
  name: 'Arf',
  age: 23
};
console.log(example1);

const example2: Profile = {
  name: 'Arf',
  age: 23
};
type Profile2 = typeof example2;
