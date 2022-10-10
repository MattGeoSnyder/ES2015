// 1. {1,2,3,4}
// 2. ref
// 3. 0: {Array(3) => true}
//    1: {Array(3) => false}

function hasDuplicate(arr){
    let set = new Set(arr);
    return arr.length !== set.size;
}

function vowelCount(str){
    let vowels = new Set('aeiou');
    let map = new Map();
    for (let char of str){
        if(vowels.has(char)){
            if(map.has(char)){
                map.set(char, map.get(char) + 1);
            } else {
                map.set(char, 1);
            }
        } 
    }
    return map;
}