/**
 * Created by netof on 06/03/2018.
 */
var arrayTest = [1, 4, 5, 10];
//index
for (var i in arrayTest) {
    console.log(i);
}
//value
for (var _i = 0, arrayTest_1 = arrayTest; _i < arrayTest_1.length; _i++) {
    var value = arrayTest_1[_i];
    console.log(value);
}
