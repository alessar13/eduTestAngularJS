let double = (value: number) => value*2;
console.log(double(2));

let greet  = (name2 = 'Max'): void => console.log(`Hello, ${name2}`)
greet('Lex');

let numbers = (arr: number[]) => console.log(Math.min(...arr))
numbers([2, 3, 4, 5, 6, -1])

let arr = [55, 20];
let number1 = [1, 2, 3, 4, 5]
arr.push(...number1);
console.log(arr)