//create an employee class that uses a for loop to loop through 5 employees created below
class Employee {
    
    id: number;
    name: string;
    isManager: boolean;
    

    constructor(id: number, name: string, isManager: boolean) {
        this.id = id;
        this.name = name;
        this.isManager = isManager;
    }

    print(): void {
        let msg: string = `${this.id}, ${this.name}, ${this.isManager}`;
        console.log(msg);
    }
}

let e1: Employee = new Employee(1,"John",true);
let e2: Employee = new Employee(2,"Jane",false);
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
    employee.print();
}