class Friend {
	static nextId: number = 0;
	Id: number;
	Name: string;
	Yearsknown: number;
	cityState: string;

	constructor(name: string, yearsknown: number, citystate: string) {
		this.Id = ++Friend.nextId;
		this.Name = name;
		this.Yearsknown = yearsknown;
		this.cityState = citystate;
	}

	    print(): void {
        let msg: string = `${this.Id}, ${this.Name}, ${this.Yearsknown}, ${this.cityState}`;
        console.log(msg);
    }
}

let f1: Friend = new Friend("John",2,"Cincinnati, OH");
let f2: Friend = new Friend("Jane",2,"Cincinnati, OH");
let f3: Friend = new Friend("Joan",3,"Florence, KY");
let f4: Friend = new Friend("James",3,"Unalaska, AK");
let f5: Friend = new Friend("Jill",4,"Rabbit Hash, KY");

let friends: Friend[] = [];

friends.push(f1);
friends.push(f2);
friends.push(f3);
friends.push(f4);
friends.push(f5);

for(let friend of friends) {
    friend.print();
}