/**
 * Created by netof on 06/03/2018.
 */

//boolean
let payed: boolean = false

//number
let age: number = 30;
let money: number = 199.99;

//String
let name: string = 'Neto';

console.log(`Name is ${name} and age is ${age}`);

//arrays
let list: number[] = [1,3,4,5,7];

//tuple
let student: [string, number, string] = ['Jose', 8.9, `spanish`];
console.log(student[0]);

//ENUM
enum colorEnum{green, yellow, white};
let color: colorEnum = colorEnum.green;

//any
let anyValue: any = 4;
anyValue = 'test';
anyValue = true;

//void to method return
function alert(): void{
    //alert('blablabla');
}


