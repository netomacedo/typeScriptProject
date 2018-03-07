/**
 * Created by netof on 06/03/2018.
 */
const prices: number[] = [10 , 56, 100];

const pricesEuro = prices.map(function (preco){
    return `£ ${preco},00`
});
console.log(pricesEuro);


//OR

const pricesEuroArrowFunction = prices.map(preco => `£ ${preco},00`);
console.log(pricesEuroArrowFunction);

const aboveTwenty = prices.filter(preco => preco > 20).map(preco => `£ ${preco},00`);
console.log(aboveTwenty);