/// <reference path="circleMath.ts">  ---- додає неймспейси

namespace MyMath {
    export const PI = 3.14;

    export function calc(dia: number){
        return dia*2;
    }

    export function calculate(width: number, height: number){
        return width*height;
    }  
}
const PI = 3.11;

console.log(MyMath.calculate(10, 5))
console.log(MyMath.PI);
console.log(PI);