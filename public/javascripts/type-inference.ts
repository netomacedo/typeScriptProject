/**
 * Created by netof on 06/03/2018.
 */

let quantity = 20;//without type, presume the type
//quantity = 'teste';

let x: [1, 3, null];// it will be number

//contextual typing
window.onmousedown  = function (event: MouseEvent){// :MouseEvent type with or without
    console.log(event.button);
}