//objects
var myDog = {
    "name" : "Quincy",
    "legs" : 3,
    "tails" : 1,
    "friends" : []
}
console.log(myDog.name) //accessing object properties with dot notation

//accessing object properties with bracket notation
// setup
var testobj = {
    "an entree" : "hamburger",
    "my side" : "veggies",
    "the drink" : "water"
};
var entreeValue = testobj["an entree"];
var drinkValue = testobj["the drink"];
console.log(entreeValue);
console.log(drinkValue);




//accessing object properties with variables

var testobj2 = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};
var playerNumber = 16;
var player = testobj2[playerNumber];
console.log(player);


//updating Object properties
myDog.name = "Pummy";
console.log(myDog.name);

//add New Properties to an Object
myDog['color'] = "brownie"
myDog.bark = "bowbow"
console.log(myDog.bark)
console.log(myDog.color)

//delete properties From an Object
console.log("Before")
console.log(myDog)
delete myDog.bark;
console.log("After")
console.log(myDog)
 
//using  Objects for Lookups
function phoneticLookup(val) {
    var result = "";

    var Lookup = {
        "alpha" : "Adams",
        "bravo" : "Boston",
        "Charlie" : "Chicago", 
        "delta" : "Denver",
        "echo" : "Easy",
        "foxtrot" : "frank"
    };
    result = Lookup[val];

    return result;

}
console.log(phoneticLookup("foxtrot"));


//Testing Objects for Properties

var myObj3 = {
    gift: "pony",
    pet: "Kitten", 
    bed: "sliegh"
};

function checkObj(checkProp) {
    if(myObj3.hasOwnProperty(checkProp)) {
        return myObj3[checkProp];
    }else {
        return "Not Found"
    }
}
console.log(checkObj("hello"))


//Manipulating Complex Objects
var myMusic = {
    "artist" : "Billy Joel",
    "title" : "Piano Man",
    "release_year" : 1973,
    "formats" : [
        "CD",
        "8T",
        "LP",
    ],
    "gold": true
}
console.log(myMusic)

//Accessing Nested Objects 

var myStorage = {
    "car" : {
        "inside" : {
            "glove box" :"maps",
            "passenger seat" : "crumbs"
        },
        "outside" : {
            "trunk" : "jack"
    }
}
};

var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents)

//Accessing Nested Arrays

var myPlants = [
    {
        type: "flowers",
        list : [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1];
console.log(secondTree);

//record collection
 
var collection = {
    "2548" : {
        "album" : "slippery when wet",
        "artist" : "Bon Jovi",
        "tracks" : [
            "Let it rock",
            "You Give Love a Bad Name" 
        ]
    },
    "2468" : {
        "album" : "1999",
        "artist" : "Prince",
        "tracks" : [
            "1999",
            "Little Red Corvette" 
        ]
    },
    "1245" : {
        "artist" : "Robert Palmer",
        "tracks" : [ ]
    },
    "5439" : {
        "album" : "ABBA Gold"
    }
};

//keep a copy of the collection for tests and it copy the entire objects
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
    if(value === "") {
        delete collection[id][prop];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value); 
    }else {
        collection[id][prop] = value;
    }

    return collection;
}

console.log(updateRecords(5439, "artist", "ABBA"));
console.log(updateRecords(2468, "tracks", "test"))