import { compact, partition } from "lodash";

const arr = [0, 1, false, 2, undefined, 3, 4, null, "", 5, NaN];
console.log(arr);
console.log(compact(arr));

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [even, odd] = partition(arr2, (n) => n % 2 === 0);
console.log(even);
console.log(odd);

let age: number = 23;

type Gender = "male" | "female";

let gender: Gender = "male";

interface Person {
	first: string;
	last: string;
	age: number;
	gender: Gender;
	[key: string]: any;
}

let person1: Person = {
	first: "john",
	last: "doe",
	age: 23,
	gender: "male",
	streetNumber: 123,
	street: "street rd"
};

let person2: Person = {
	first: "jane",
	last: "doe",
	age: 43,
	gender: "female",
	salary: function calcSal(income: number) {
		return income * 0.7;
	}
};

function pow(x: number, y: number): number {
	return Math.pow(x, y);
}

const arr3 = ["1", "2", "3"];
arr3.push(pow(2, 5).toString());

function callFlow(param: string | number) {
	if (typeof param === "string") {
		param++;
		param.indexOf("a");
	} else {
		param++;
		param.indexOf("a");
	}
}