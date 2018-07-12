//create an employee class that uses a for loop to loop through 5 employees created below
class Employee {
    
    Id: number;
    Name: string;
    Active: boolean;
    

    constructor(Id: number, Name: string, , Active: boolean)
    {
        this.Id = Id;
        this.Name = Name;
        this.Active = Active;
    }

    log(): void {
        let msg: string = `${this.Id}, ${this.Name}, ${this.Active},`;
        console.log(msg);
    }
}

let e1: Employee = new Employee(1,"John",true);
let e2: Employee = new Employee(2,"Jane",true);
let e3: Employee = new Employee(3,"Joan",false);
let e4: Employee = new Employee(4,"James",true);
let e5: Employee = new Employee(5,"Jill",true);

let employees: Employee[] = [];

employees.push(e1);
employees.push(e2);
employees.push(e3);
employees.push(e4);
employees.push(e5);

for(let employee of employees) {
    employee.log();
}