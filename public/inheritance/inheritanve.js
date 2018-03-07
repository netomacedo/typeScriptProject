var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by netof on 06/03/2018.
 */
var Employer = /** @class */ (function () {
    function Employer(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    Employer.prototype.payTax = function (tax) {
        if (tax === void 0) { tax = 7.5; }
        console.log("Paying " + this.salary * tax / 100 + " of taxes");
    };
    return Employer;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Developer;
}(Employer));
var ProjectManager = /** @class */ (function (_super) {
    __extends(ProjectManager, _super);
    function ProjectManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProjectManager.prototype.payTax = function (tax) {
        if (tax === void 0) { tax = 27.5; }
        console.log("Paying More Tax");
        _super.prototype.payTax.call(this, tax);
    };
    return ProjectManager;
}(Employer));
//Tests
var neto = new Developer('Neto', 4000);
neto.payTax();
var moreira = new ProjectManager('Moreira', 7000);
moreira.payTax();
