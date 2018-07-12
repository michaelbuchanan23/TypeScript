let a: number = 0;
let b: string = "ABC";

function add1(num: number): void {
	console.log(num + 1);
}

function log(str: string): void {
	console.log(str);
}

add1(a);
log(`The value of b is ${b}`);