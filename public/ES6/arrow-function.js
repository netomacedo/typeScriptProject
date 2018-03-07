/**
 * Created by netof on 06/03/2018.
 */
var prices = [10, 56, 100];
var pricesEuro = prices.map(function (preco) {
    return "\u00A3 " + preco + ",00";
});
console.log(pricesEuro);
//OR
var pricesEuroArrowFunction = prices.map(function (preco) { return "\u00A3 " + preco + ",00"; });
console.log(pricesEuroArrowFunction);
var aboveTwenty = prices.filter(function (preco) { return preco > 20; }).map(function (preco) { return "\u00A3 " + preco + ",00"; });
console.log(aboveTwenty);
