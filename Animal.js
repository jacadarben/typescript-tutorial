"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    function Animal(_name) {
        this._name = _name;
    }
    Object.defineProperty(Animal.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (v) {
            this._name = v;
        },
        enumerable: true,
        configurable: true
    });
    Animal.prototype.walk = function (distance) {
        console.log("Hi, my name is " + this._name + " and I just walked " + distance + " feet");
    };
    return Animal;
}());
exports.Animal = Animal;
