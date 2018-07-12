"use strict";
//create an employee class that uses a for loop to loop through 5 employees created below
var Employee = /** @class */ (function () {
    function Employee(Id, Name, Active) {
        this.Id = Id;
        this.Name = Name;
        this.Active = Active;
    }
    Employee.prototype.log = function () {
        var msg = this.Id + ", " + this.Name + ", " + this.Active + ",";
        console.log(msg);
    };
    return Employee;
}());
var e1 = new Employee(1, "John", true);
var e2 = new Employee(2, "Jane", true);
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
    employee.log();
}
