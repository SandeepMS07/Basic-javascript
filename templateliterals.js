//create Stringd using Template Literals
const person = {
    name: "Zodiac Hasbro",
    age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);


//coding challange
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
    const resultDisplayArray = [];
    for  (let i = 0; i<arr.length; i++) {
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
    }
    return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);

console.log(resultDisplayArray);


//Write Concise Object Literal Declarations Using Simple Fields
// const createPerson = (name, age, gender) => {
//     return {
//         name : name,
//         age : age,
//         gender : gender
//     };
// };

const createPerson = (name, age, gender) =>   ({name, age, gender})  ;
console.log(createPerson("Zodiac Hasbro", 56, "male"));

//Write Concise Declararive Functions
const bicycle = {
    gear :2,
    //setGear: function(newGear) { //instead of this
    setGear(newGear) {  
         "use strict";
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);


