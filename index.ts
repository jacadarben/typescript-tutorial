import { compact, partition } from "lodash";

const arr = [0, 1, false, 2, undefined, 3, 4, null, "", 5, NaN];
console.log(arr);
console.log(compact(arr));

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [even, odd] = partition(arr2, (n) => n % 2 === 0)
console.log(even);
console.log(odd);