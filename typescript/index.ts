//types - string, numbers, boolean , array , tuple , void never

//string
const a : string = "saad"
console.log(a);


//array
let numbers: number[] = [10, 20, 30];
console.log(numbers);

let names: string[] = ["Saad", "Ali"];
console.log(names);


//void
function greet(name: string): void {
  console.log(`Hello ${name}`);
}
greet("saad")


//never
function throwError(message: string): never {
  throw new Error(message);
}


