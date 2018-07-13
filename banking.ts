abstract class Account {
	id: number;
	description: string;
	balance: number

	get getId(): number {
		return this.id;
	}
	
	constructor(id: number, description: string) {
		this.id = id;
		this.description = description;
		this.balance = 0;
	}

	deposit(amount: number): void {
	this.balance += amount;
	}

	withdraw(amount: number): void {
		this.balance -= amount;
	}

	getbalance(): number {
		return this.balance;
	}
}

//Savings Class -- is inheriting Account
class Savings extends Account {
	intRate: number;

	constructor(id: number, description?: string, intRate: number = 0.01) {
		super(id, description); //super calls the constructor of the parent -- in this case that is "Account"
		this.intRate = intRate;
	}

	calcinterest(): void {
			let interest:number = this.balance * this.intRate;
			this.deposit(interest);
		}
}

let sav1: Savings = new Savings (0,'savings account', 0.02);
console.log(sav1.getbalance());
sav1.deposit(100);
console.log(sav1.getbalance());
sav1.withdraw(50);
console.log(sav1.getbalance());
sav1.calcinterest();
console.log(sav1.getbalance());

//Checking Class
// class Checking extends Account {
// 	nextchecknbr: number;

// 	constructor(id: number, description?: string, nextchecknbr: number) {
// 		super(id,description);
// 		this.nextchecknbr = nextchecknbr;
// 	}

// 	writecheck(payee: string, amount: number) {
// 			let checknbr: number = this.nextchecknbr++;
// 			this.withdraw(amount);
// 		}
// }