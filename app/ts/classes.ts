

class Person {
    name: string;
    private type: string =  'some';
    protected age: number = 27;

    constructor(name: string, public username: string) {
        this.name = name;
    }

    protected printAge(){
        console.log(this.age);
        console.log(this.type);
    }

    setType(type: string) {
        this.type = type;
        console.log(this.type);

    }
    
}

let person = new Person('Lex', 'Lex2');
console.log(person.name)
// person.printAge('dsa');
person.setType('Krishna');

class Krishna extends Person {

    constructor(username: string) {
        super('Govinda', username = username);
    }
    // name: string = 'Krishna';
}

let Krsna = new Krishna('Gopala');
console.log(Krsna)


class Book {
    private name = "It";

    set name1(value: string) {
        this.name = value;
    }
    get name1() {
        return this.name;
    }
}

const book = new Book();
console.log(book.name1);
book.name1 = 'sdad';
console.log(book.name1);

class Helpers {
    static PI: number = 3.14;
    static calc() {
        return this.PI;
    }
}

console.log(Helpers.PI*2);
console.log(Helpers.calc());

///// abstract class

abstract class Project {
    projectName: string = 'sass';
    bundget: number = 21;

    abstract foo(value: string): void;

    calcBudget () {
        return this.bundget * 2
    }


}

class ITProject extends Project {
    foo(value: string): number {
        return 2*2;
    }
}