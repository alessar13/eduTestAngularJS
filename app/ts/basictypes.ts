import { strict } from "assert";
import { types } from "util";
import { stringify } from "querystring";


// let govinda: string = 'Govinda';
// let govinda1: string;
// let myAge = 27;
// myAge = 28;

console.log(myAge);
console.log(govinda);
// console.log(govinda1);
console.log(typeof(govinda));
// console.log(govinda instanceof String);


let arr: any[];
arr = [1, 2, 'any', 12]
console.log(arr);
arr = [123];
console.log(arr);


let bool: boolean = false;


/// tuples

let address: [string, number] = ['fdsf', 11];

/// enum

enum Color {
    Grey,
    Green,
    Blue
}

let color1: Color = Color.Green;
console.log(color1);


// functions

function foo (): string {
    let str = "da";
    console.log(str);
    return str;
}

foo();



//// tye alias

let address1: [string, number] = ['fdsf', 11];
type complex = [string, number]; /// можно использовать тип много раз

////union types

let dog = function(): string | boolean {
    let string = 'dsdd';
    return string;
}

//////////////////////////////

let bankAccount: { money: number, deposit: (value: number) => void} = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};
type account = { money: number, deposit: (value: number) => void};
type alias = {name: string, bankAccount: account, hobbies: string[]}

let myself: alias = {
    name: 'Max',
    bankAccount: bankAccount,
    hobbies: ['Sports', 'Cooking']
};

myself.bankAccount.deposit(3000);
console.log(myself);


