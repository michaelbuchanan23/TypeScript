"use strict";
"option strict";
var theNumber = 0;
var inputCtrl;
function loaded() {
    inputCtrl = document.getElementById("value");
    inputCtrl.value = theNumber;
}
function display() {
    //store the new number value
    inputCtrl.value = theNumber;
}
function add() {
    theNumber++;
    display();
}
function sub() {
    theNumber--;
    display();
}
