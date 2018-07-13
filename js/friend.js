"use strict";
var Friend = /** @class */ (function () {
    function Friend(name, yearsknown, citystate) {
        this.Id = ++Friend.nextId;
        this.Name = name;
        this.Yearsknown = yearsknown;
        this.cityState = citystate;
    }
    Friend.prototype.print = function () {
        var msg = this.Id + ", " + this.Name + ", " + this.Yearsknown + ", " + this.cityState;
        console.log(msg);
    };
    Friend.nextId = 0;
    return Friend;
}());
var f1 = new Friend("John", 2, "Cincinnati, OH");
var f2 = new Friend("Jane", 2, "Cincinnati, OH");
var f3 = new Friend("Joan", 3, "Florence, KY");
var f4 = new Friend("James", 3, "Unalaska, AK");
var f5 = new Friend("Jill", 4, "Rabbit Hash, KY");
var friends = [];
friends.push(f1);
friends.push(f2);
friends.push(f3);
friends.push(f4);
friends.push(f5);
for (var _i = 0, friends_1 = friends; _i < friends_1.length; _i++) {
    var friend = friends_1[_i];
    friend.print();
}
