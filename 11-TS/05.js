var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, id, married) {
        this.name = name;
        this.id = id;
        if (married)
            this.married = married;
    }
    Person.prototype.printName = function () {
        console.log(this.name);
    };
    return Person;
}());
var person1 = new Person('John', 1, true);
var person2 = new Person('Jill', 2);
console.log(person1);
console.log(person2);
//person1.name = 'Alex'  // Will give an error because name is private
person1.married = false; // No problem. married is public
console.log(person1);
console.log('--------------------------------------');
//------------------------------------
// Sub class
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, id, position, married) {
        var _this = _super.call(this, name, id, married) || this;
        _this.position = position;
        return _this;
    }
    Employee.prototype.print = function () {
        this.printName();
        console.log(this.id, this.position);
        if (this.married)
            console.log(this.married);
    };
    return Employee;
}(Person));
var empl = new Employee('Mary', 4, 'Developer', true);
empl.print();
