/**
 * Created by netof on 06/03/2018.
 */
//var, let and const
//var example
function startGame(start) {
    var name = 'Messi and Friends';
    if (start) {
        var city = 'Madrid';
    }
    console.log("The game " + name + " will be in " + city);
}
startGame(false);
