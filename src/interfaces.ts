export {};

type ObjectType = {
  name: string;
  age: number;
};
let object1: ObjectType = {
  name: 'Arf',
  age: 23
};

interface ObjectInterface {
  name: string;
  age: number;
}
let object2: ObjectInterface = {
  // name: true,
  name: 'Arf',
  age: 23
};
