// Object Destructuring
// 1. 8 
// 1846;

// 2. { yearNeputuneDiscovered: 1846, yearMarsDiscovered: 1659 }

// 3. Your name is Alegjandro and you like purple
// Your name is Melissa and you like green

// Array Destructuring
// 1. Maya
// Marisa
// Chi

// 2. "Raindrops on roses"
// "whiskers on kittens"
// ["bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

// 3. [10, 30, 20]

var obj = {
    numbers: {
      a: 1,
      b: 2
    }
};
  
const {numbers: {a, b}} = obj;

var arr = [1,2];
[arr[1], arr[0]] = [arr[0], arr[1]];

let raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest});
