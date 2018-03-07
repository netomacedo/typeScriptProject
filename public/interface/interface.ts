/**
 * Created by netof on 06/03/2018.
 */
interface  People{
    age: number;
    gen?: string;//not required

}

function printAge(people: People){
    console.log(people.age);
}

let joao = {name: 'Joao Marcos', age: 32};
printAge(joao);