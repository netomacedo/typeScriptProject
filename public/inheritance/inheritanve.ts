/**
 * Created by netof on 06/03/2018.
 */
class Employer{

    name: string;
    salary: number;

    constructor(name: string, salary: number){
        this.name = name;
        this.salary = salary;
    }

    payTax(tax: number = 7.5){
        console.log(`Paying ${this.salary * tax / 100} of taxes`)
    }


}

class Developer extends  Employer{

}

class ProjectManager extends  Employer{
    payTax(tax: number = 27.5){
        console.log(`Paying More Tax`);
        super.payTax(tax);
    }
}

//Tests
let neto = new Developer('Neto', 4000);
neto.payTax();

let moreira = new ProjectManager('Moreira', 7000);
moreira.payTax();
