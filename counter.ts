"option strict"

let theNumber: number = 0;
let inputCtrl: number;

function loaded(): void {
    inputCtrl = document.getElementById("value");
    inputCtrl.value = theNumber;
}

function display(): void {
    //store the new number value
    inputCtrl.value = theNumber;
}

function add(): void {
    theNumber++;
    display();
}

function sub(): void {
    theNumber--;
    display();
}