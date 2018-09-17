// console.log("test");

// Section 1. Data Types

// Boolean
lightSwitchIsOn = true;
    
// String
let userEmailAddress = "td@gmail.com";
    
// Object    
const spaceship = {
    weapons: ["laser blasters", "tractor beam"],
    engine: "warp drive",
    storage: "hull"
 };
    
// Array
let stundents = ["name1", "name2", "name3"];

//Object
const students = {
    name1: {
        location: "local1",
    },
    name2: {
        location: "local2",
    },
    name3: {
        location: "local3"
    }
};

//Object

const students2 = {
    name1: {
        location: "local1",
        favoriteTvShows: ["tvShow1", "tvShow2"],
    },
    name2: {
        location: "local2",
        favoriteTvShows: ["tvShow1", "tvShow2"],
    },
    name3: {
        location: "local3",
        favoriteTvShows: ["tvShow1", "tvShow2"],
    }
};

// Section 2. Take it Easy

// Q1)

const rainbowArray = ["red", "orange", "yellow", "green", "blue", "purple", "violet"];

// Q2)

console.log(rainbowArray[4]);

// Q3) & Q4)

const Tomas = {
    favoriteFood: "pizza",
    hobby: "sports",
    CurrenLocation: "Denver",
    favDataType: "boolean"
}

console.log(Tomas.hobby);

// Section 3. Crazy Object!

const crazyObject = {
    taco: [
      {
        meat: 'steak',
        cheese: ['panela', 'queso', 'chihuahua']
      },
      {
        meat: 'chicken',
        salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
      },
    ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
      characters: [
        {
          name: "Jeff",
          occupation: "manager"
        },
        {
          name: "funkhauser",
          occupation: "tv dude"
        },
        {
          name: "susie",
          occupation: "jeffs wife",
          favourtieHobby: "Swearing at Larry and Jeff"
        },
      ]
    }
  }

  console.log(crazyObject.taco[1].salsa[5]);
  console.log(crazyObject.larry.quotes[0]);
  console.log(crazyObject.larry.characters[2].favourtieHobby);
  console.log(crazyObject.larry.nicknames[1]);
  console.log(crazyObject.larry.characters[1]);

// Section 4. Object-ception

const inception = {
    reality: {
        dreamLayer1: {
            dreamLayer2: {
                dreamLayer3: {
                    dreamLayer4: {
                        dreamLayer5: {
                            dreamLayer6: {
                                limbo: "Joseph Gordon Levitt"
                           }
                        }
                    }
                }
            }
        }
    }
 }

inception.reality.limbo = null;
console.log(inception.reality.limbo);

