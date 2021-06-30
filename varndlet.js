//difference between the var and let Keywords
let catName = "Quincy";
let quote;

//catName = "Beau";

function catTalk() {
    "use strict";

    catName = "Oliver";
    quote = catName + " says Meow!";
    return quote;
}
console.log(catTalk( ));



//Compare Scopes of the var and let Keywords
//if u use let keyword it uses only defined in the  area
function checkScope() {
    "use strict";

    let  i = "function scope";
    if(true) {
         let i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}
console.log(checkScope());


//Declare a Read-Only Variable with the const Keyword
function printManyTimes(str) {
    "use strict";

    const SENTENCE = str + " is cool!";

    //sentence = str + " is amazing!";

    for(let i = 0; i < str.length; i+=2) {
        console.log(SENTENCE)
    }
}
printManyTimes("freecodecamp")




//Mutant an Array Declared with const
//mutant = reassign
const s = [5, 7, 2];
function editInPlace() {
    "use strict";

    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
  //  s = [2, 5, 7];
}
editInPlace();

console.log(s);



//prevent Object Mutation
 function freezeObj() {
     "use strict";
     const MATH_CONSTANTS = {
         PI = 3.14
     };
     Object.freeze(MATH_CONSTANTS);

     try {
         MATH_CONSTANTS.PI = 99;
     } catch ( ex ){
         console.log(ex);
     }

     return MATH_CONSTANTS.PI;
 }

 const PI = freezeObj(); 
