
//Use the parseeInt Function 
function convertToInteger(str) {
    return parseInt(str);
}
console.log( convertToInteger("56"));

//Use the parseeInt Function with a Radix
function convertToInteger1(str) {
    return parseInt(str, 2);
}
console.log(convertToInteger1("101"));
