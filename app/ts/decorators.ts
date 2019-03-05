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
/// Property Decorator
/// Parameter Decorator


// function edit(value: boolean) {
//     return function(target: any, propName: string, descriptor: PropertyDescriptor){
//             descriptor.writable = value;
//     }
// }
// class Project {

//     projectName: string;

//     constructor(name: string) { 
//        this.projectName = name;
//     }

//     // @edit(false)
//     calcBudget() {
//         console.log(1000);
//     }
// }

// let proj = new Project('Govinda');
// console.log(proj);
// proj.calcBudget();
// proj.calcBudget = function() {
//     console.log(2000)
// }
// proj.calcBudget();