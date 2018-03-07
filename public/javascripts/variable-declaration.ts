/**
 * Created by netof on 06/03/2018.
 */
//var, let and const

//var example
// function startGame(start: boolean){
//     var name = 'Messi and Friends';
//
//     if(start){
//         var city = 'Madrid';
//     }
//     console.log(`The game ${name} will be in ${city}`)
// }
// startGame(true);
// startGame(false);

//let example, access variable inside the correct scope
// function startGame(start: boolean){
//     let name: string = 'Messi and Friends';
//     let city: string;
//
//     if(start){
//         city = 'Madrid';
//     }
//     console.log(`The game ${name} will be in ${city}`)
// }
// startGame(true);
// startGame(false);

//const example, access variable inside the correct scope and name is constant we can not change the value.
function startGame(start: boolean){
    const name: string = 'Messi and Friends';
    let city: string;

    if(start){
        city = 'Madrid';
//        name: string = 'test';
    }
    console.log(`The game ${name} will be in ${city}`)
}
startGame(true);
startGame(false);