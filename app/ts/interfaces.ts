function greets(persona: NamedPerson) {
    console.log(`Hello, ${persona.name}`)
    // console.log(`Hello, ${persona.?}`)
}

const persona = {
        name: 'MAx',
        age: 27
}

// greets(persona);


interface NamedPerson {
    name: string;
    age?: number;
    [propName: string]: any,
    greet(lastName: string): void;
}

class Test implements NamedPerson {
    name: string = '';
    greet(lastName: string): void {
        console.log('name')
    };
}

let test = new Test();
test.name = 'Krishna';