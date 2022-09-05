const {performance} = require('perf_hooks');

let array = [1,2,3,4,5,6,7,8,9]

let mySet_Date = new Set();
let startArray = Date.now();
// console.log(array.indexOf(2));
array.indexOf(2)
let endArray = Date.now();
// console.log('Время поиска по массиву' ,endArray - startArray, 'мс');

let startSet = Date.now();
// console.log(mySet_Date.add(array));
mySet_Date.add(array)
let endSet = Date.now();
// console.log('Время добавления в Set' ,endSet - startSet, 'мс');

let startSearchSet = Date.now();
// console.log(mySet_Date.has(array));
mySet_Date.has(array)
let endSearchSet = Date.now();
// console.log('Время поиска в Set' ,endSearchSet - startSearchSet, 'мс');

//---------------------------------------------------------------------//

let mySet_Performance = new Set();

let startArray_performance = performance.now();
// console.log(array.indexOf(2));
array.indexOf(2)
let endArray_performance = performance.now();
// console.log('Время поиска по массиву' ,endArray_performance - startArray_performance, 'мс');


let startSet_performance = performance.now();
// console.log(mySet_Performance.add(array));
mySet_Performance.add(array)
let endSet_performance = performance.now();
// console.log('Время добавления в Set' ,endSet_performance - startSet_performance, 'мс');


let startSearchSet_performance = performance.now();
// console.log(mySet_Performance.has(array));
mySet_Performance.has(array)
let endSearchSet_performance = performance.now();
// console.log('Время поиска в Set' ,endSearchSet_performance - startSearchSet_performance, 'мс');
