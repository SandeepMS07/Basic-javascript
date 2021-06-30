//use class syntax to define a  constructor function
// var SpaceShuttle = function(targetPlanet){
//     this.targetPlanet = targetPlanet;
// }

// var zeus = new SpaceShuttle('Jupitar');

// console.log(zeus.targetPlanet)\

//instead of this using class
class SpaceShuttle {
    constructor(targetPlanet) {
     
    this.targetPlanet = targetPlanet;   
    }
}

var zeus = new SpaceShuttle('Jupitar');

console.log(zeus.targetPlanet)

//another
function makeClass() {
    class Vegetable{
        constructor(name) {
            this.name = name;
        }
    }   
    return Vegetable;
}

const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name);

//Use getters and setters to control Acess to an Object
class Book{
    constructor(author) {
        this._author = author;
    }
    //getter
    get writer(){
        return this._author;
    }
    //setter
    set writer(updatedAuthor){
        this._author = updatedAuthor;
    }
}
console.log("sandy");

//ex
function makeClass() {
    class Thermostat {
        constructor(temp) {
            this._temp = 5/9 * (temp - 32);
        }
        get temperature() {
            return this._temp;
        }
        set temperature(updatedTemp){
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);

