"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var arr = [0, 1, false, 2, undefined, 3, 4, null, "", 5, NaN];
console.log(arr);
console.log(lodash_1.compact(arr));
var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var _a = lodash_1.partition(arr2, function (n) { return n % 2 === 0; }), even = _a[0], odd = _a[1];
console.log(even);
console.log(odd);
var age = 23;
var gender = "male";
var person1 = {
    first: "john",
    last: "doe",
    age: 23,
    gender: "male",
    streetNumber: 123,
    street: "street rd"
};
var person2 = {
    first: "jane",
    last: "doe",
    age: 43,
    gender: "female",
    salary: function calcSal(income) {
        return income * 0.7;
    }
};
function pow(x, y) {
    return Math.pow(x, y);
}
var arr3 = ["1", "2", "3"];
arr3.push(pow(2, 5).toString());
