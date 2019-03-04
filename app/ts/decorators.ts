// function logged (constructorFn: Function) {
//     console.log(constructorFn);
// }


// @logged
// class Person {
//     constructor(){
//         console.log('Govinda');
//     }
// }


// // Factory
// function logging(value: boolean){ 
//     return value ? logged : null;
// }

// @logging(true)
// class Car {
//     // name = 12;
// }


// /// Advanced

// function printable (constructorFn: Function) {
//     constructorFn.prototype.print = function(){
//         console.log(this);  
//     }
//     constructorFn.prototype.name = function(){
//         console.log("Govinda");  
//     }
// }

// @logging(true)
// @printable
// class Plant {
//     me = "ds";
// }

// let plant = new Plant();
// (<any>plant).print();
// (<any>plant).name();
// console.log(plant.me);



//// Method Decorator

class Project {

    projectName: string;

    constructor() {
        
    }
}