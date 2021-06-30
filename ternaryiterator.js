
//use the conditional(Ternary) Operator     
//condition ? statement-if-true : statement-if-fals;
//
// function checkEqual(a, b) { //if-else
//  if(a==b) {
//     return   true;
//  } else {
//     return false;
//  }
// }
function checkEqual(a, b) { //ternary 
    return a==b ? true : false;
}
console.log(checkEqual(1, 2));

//use Multiple conditional(Ternary) Operator     
//condition ? statement-if-true : other condn : statement-if-true : statement-if-false;
function checkSign(num) {
    return num > 0 ? "Positive" : num < 0 ? "negative" : "zero";

}
console.log(checkSign(10));

