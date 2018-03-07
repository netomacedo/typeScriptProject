var Client = /** @class */ (function () {
    function Client(name, age) {
        this.name = name;
        this.age = age;
    }
    Client.prototype.sayHello = function () {
        return "Hello my name is " + this.name + " and I'm " + this.age;
    };
    return Client;
}());
var client = new Client('Neto', 30);
var presentation = client.sayHello();
console.log(presentation);
