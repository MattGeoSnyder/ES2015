let filterOutOdds = function() {
    var nums = Array.prototype.slice.call(arguments);
    return nums. filter(function(num){
        return num % 2 === 0;
    });
}

let ES2015filterOutOdds = (...nums) => nums.filter((num) => num % 2 === 0);

// function findMin(...nums){
//     return nums.reduce((acc, min) => {
//         if (min < acc){
//             return min;
//         }
//         return acc;
//     });
// }

let findMin = (...nums) => nums.reduce((acc,min) => min < acc ? min:acc);

function mergeObjects(obj1, obj2){
    return {...obj1, ...obj2};
}


function doubleAndReturnArgs(arr, ...args){
    return [...arr, ...args.map((val) => val * 2)];
}

function removeRandom(items) {
    let rand = Math.floor(Math.random()*items.length);
    let copy = [...items];
    copy.splice(rand,1);
    return copy;
}

let extend = (arr1, arr2) => [...arr1,...arr2];

let addKeyVal = (obj, key, val) => {
    let newOb = {...obj};
    newOb[key] = val;
    return newOb;
} 

let removeKey = (obj, key) => {
    let newOb = {...obj};
    delete newOb[key];
    return newOb;
}

let combine = (obj1, obj2) => ( {...obj1, ...obj2} );

let update = (obj, key, val) => {
    let newOb = {...obj};
    newOb[key] = val;
    return newOb;
}
