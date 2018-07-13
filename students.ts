class Student {
    Id: number;
    Name: string;
    SAT: number;
    Active: boolean;

    constructor(Id: number, Name: string, SAT: number, Active: boolean)
    {
        this.Id = Id;
        this.Name = Name;
        this.SAT = SAT;
        this.Active = Active;
    }

    log(): void {
        let msg: string = `${this.Id}, ${this.Name}, ${this.Active}, ${this.SAT}`;
        console.log(msg);
    }
}

let students: Student[] = [];
let s1: Student = new Student(1,"John",1200,true);
let s2: Student = new Student(2,"Jane",1300,true);

students.push(s1);
students.push(s2);

for(let student of students) {
    student.log();
}

s1.log();
s2.log();