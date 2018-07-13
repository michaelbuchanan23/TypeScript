"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(id, description) {
        this.id = id;
        this.description = description;
        this.balance = 0;
    }
    Object.defineProperty(Account.prototype, "getId", {
        get: function () {
            return this.id;
        },
        enumerable: true,
        configurable: true
    });
    Account.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    Account.prototype.withdraw = function (amount) {
        this.balance -= amount;
    };
    Account.prototype.getbalance = function () {
        return this.balance;
    };
    return Account;
}());
//Savings Class -- is inheriting Account
var Savings = /** @class */ (function (_super) {
    __extends(Savings, _super);
    function Savings(id, description, intRate) {
        if (intRate === void 0) { intRate = 0.01; }
        var _this = _super.call(this, id, description) || this;
        _this.intRate = intRate;
        return _this;
    }
    Savings.prototype.calcinterest = function () {
        var interest = this.balance * this.intRate;
        this.deposit(interest);
    };
    return Savings;
}(Account));
var sav1 = new Savings(0, 'savings account', 0.02);
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
