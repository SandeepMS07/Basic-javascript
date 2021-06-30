
//Iterate with While loops
var myArray = [];

var i = 0;
while(i < 5) {
    myArray.push(i);
    i++;
}

console.log(myArray);

//Iterate with For Loops
  var ourArray = [];

  for(var i = 0; i <6; i++) {
      ourArray.push(i);
  }
  console.log(ourArray); 


  //Iterate Odd Numbers with a For Loop
//even no
var ourArray2 = [];

for( var i = 0; i < 10; i += 2) {
    ourArray2.push(i);
}
console.log(ourArray2);
//odd no
var ourArray3 = [];
for (var i = 1; i < 10; i+=2) {
    ourArray3.push(i);
}
console.log(ourArray3);


//Count Backwards with a For Loop
//even
var ourArray4 = [];

for( var i = 10; i > 0; i -= 2) {
    ourArray4.push(i);
}
console.log(ourArray4);
//odd
var ourArray5 = [];

for( var i = 9; i > 0; i -= 2) {
    ourArray5.push(i);
}
console.log(ourArray5);


//Iterate Through an Array with a For Loop
var myArray2 = [2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i <myArray2.length; i++) {
    total += myArray2[i];
}
console.log(total); 


//Nesting For Loops

function multiplyAll(arr) {
    var product = 1;

    for(var i = 0;  i < arr.length; i++) {
        for(var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}
var product = multiplyAll([[1,2], [3,4], [5,6,7]]);
console.log(product);



//Iterate with Do While Loops
var myArray6 = [];
var i = 10;

do {
    myArray6.push(i);
    i++
}while(i < 5)

console.log(i, myArray6);

//profile Lookup
//setup
var contacts = [
    {
        "firstname" : "Akira",
        "lastName" : "Laine",
        "number" : "8970059846",
        "likes" : ["pizza", "coding", "Brownie Points"]
    },
    {
        "firstname" : "Harry",
        "lastName" : "Potter",
        "number" : "9110675972",
        "likes" : ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstname" : "Sherlock",
        "lastName" : "Holmes",
        "number" : "9590387494",
        "likes" : ["Intriguing Cases", "Violin"]
    },
    {
        "firstname" : "Kristian",
        "lastName" : "Vos",
        "number" : "7259938548",
        "likes" : ["JavaScript", "Gaming", "Foxes"]
    },
];

function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) {
        if(contacts[i].firstname === name) {
            return contacts[i][prop] || "No Such Property";
        }
    }
    return "No such contact";
}

var data = lookUpProfile("Harry", "likses");
console.log(data);