"use strict";
//create an employee class that uses a for loop to loop through 5 employees created below
var Employee = /** @class */ (function () {
    function Employee(id, name, isManager) {
        this.id = id;
        this.name = name;
        this.isManager = isManager;
    }
    Employee.prototype.print = function () {
        var msg = this.id + ", " + this.name + ", " + this.isManager;
        console.log(msg);
    };
    return Employee;
}());
var e1 = new Employee(1, "John", true);
var e2 = new Employee(2, "Jane", false);
var e3 = new Employee(3, "Joan", false);
var e4 = new Employee(4, "James", true);
var e5 = new Employee(5, "Jill", true);
var employees = [];
employees.push(e1);
employees.push(e2);
employees.push(e3);
employees.push(e4);
employees.push(e5);
for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
    var employee = employees_1[_i];
    employee.print();
}
