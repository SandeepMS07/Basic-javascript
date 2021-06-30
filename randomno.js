//Generate Random Fractions
function randomFraction() {
    return Math.random();
}

console.log(randomFraction());


//Generate Random Whole Numbers

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {
    return Math.floor(Math.random() * 200);//random no between 1-200
}

console.log(randomWholeNum());


//Generate Rndom Whole Numbers within a Range
function randomRange(myMin, myMax) {
    return Math.floor(Math.random ()* (myMax - myMin + 1)) + myMin;
}
var myRandom = randomRange(1, 6);
console.log(myRandom);