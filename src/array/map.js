// Extract First Letter: Given an array of words, use the map() method to create a new array where each element is the first letter of the corresponding word.

function extractFirstLetter(arr){
    return arr.map((arr)=>arr[1])
    
}
console.log(extractFirstLetter(["gautam","kaushal"]))

function extractFirstString(arr){
    return arr[0]
}

console.log(extractFirstString(["gautam","kaushal"]))