const {performance} = require('perf_hooks');

let array = [1,2,3,4,5,6,7,8,9]

let mySet_Date = new Set();
let startArray_Date = Date.now();
console.log(array.indexOf(2));
// array.indexOf(2)
let endArray_Date = Date.now();

let startSet_Date = Date.now();
console.log(mySet_Date.add(array));
// mySet_Date.add(array)
let endSet_Date = Date.now();

let startSearchSet_Date = Date.now();
console.log(mySet_Date.has(array));
// mySet_Date.has(array)
let endSearchSet_Date = Date.now();

//---------------------------------------------------------------------//

let mySet_Performance = new Set();

let startArray_performance = performance.now();
console.log(array.indexOf(2));
// array.indexOf(2)
let endArray_performance = performance.now();


let startSet_performance = performance.now();
console.log(mySet_Performance.add(array));
// mySet_Performance.add(array)
let endSet_performance = performance.now();


let startSearchSet_performance = performance.now();
console.log(mySet_Performance.has(array));
// mySet_Performance.has(array)
let endSearchSet_performance = performance.now();


console.log(
`Время поиска через indexOf
Замер через Date.now: ${endArray_Date - startArray_Date}, мс
Замер через performance.now: ${endArray_performance - startArray_performance}, мс`
)
console.log(
    `Время добавления через Set
Замер через Date.now: ${endSet_Date - startSet_Date}, мс
Замер через performance.now: ${endSet_performance - startSet_performance}, мс`
)
console.log(
    `Время поиска через Set
Замер через Date.now: ${endSearchSet_Date - startSearchSet_Date}, мс
Замер через performance.now: ${endSearchSet_performance - startSearchSet_performance}, мс`
)