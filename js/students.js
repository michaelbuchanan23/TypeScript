"use strict";
var Student = /** @class */ (function () {
    function Student(Id, Name, SAT, Active) {
        this.Id = Id;
        this.Name = Name;
        this.SAT = SAT;
        this.Active = Active;
    }
    Student.prototype.log = function () {
        var msg = this.Id + ", " + this.Name + ", " + this.Active + ", " + this.SAT;
        console.log(msg);
    };
    return Student;
}());
var students = [];
var s1 = new Student(1, "John", 1200, true);
var s2 = new Student(2, "Jane", 1300, true);
students.push(s1);
students.push(s2);
for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
    var student = students_1[_i];
    student.log();
}
s1.log();
s2.log();
