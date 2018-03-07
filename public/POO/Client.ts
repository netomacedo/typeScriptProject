class Client{

    name: string;
    age: number;

    constructor(name: string, age: number ){
        this.name = name;
        this.age = age;
    }


    sayHello(){
        return `Hello my name is ${this.name} and I'm ${this.age}`
    }
}

let client: Client = new Client('Neto', 30);
let presentation: string = client.sayHello();
console.log(presentation);