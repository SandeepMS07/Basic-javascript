
 //Use Arrow Functions to write Concise Anonymous Functions 

//norma function
 //  var magic = function() {
//      return new Data();
//  }  


//Arrow Function
 const magic = () => new Data();

 //Write Arrow functions with Parameters
 //this is normal function
// var myConcat = function(Arr1, arr2) {
//     return Arr1.concat(arr2);
// };

// console.log(myConcat([1,2], [3,4,5]));

//this is arrow function
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1,2], [3,4,5]));

//Write Higher Order Arrow Functions
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squareIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squareIntegers;
};

const squareIntegers = squareList(realNumberArray);
console.log(squareIntegers);

//Default Parameters
const increment = (function() {
    return function increment(number, value = 1) {
        return number + value;
    };
}) ();
console.log(increment(5, 2));
console.log(increment(5))

//Use the Rest Operator with Function Parameters
//rest opeartor = ...
const sum = (function() {
    return function sum(...args) {
        return args.reduce((a, b) => a+b, 0);
    };
})();
console.log(sum(1, 2, 3, 4));


//use the spread operator to evaluate arrays in-place  
const arr12 = ['jan', 'feb', 'mar', 'apr', 'may'];
let arr22;
(function() {
    arr22 = [...arr12];
    arr12[0] = 'potato'
}) ();
console.log(arr22);