//##  Unique Values: Write a function getUniqueValues that takes an array as input and returns an array containing only unique values.


function getUniqueValues(arr){
    return new Set(arr)
}
console.log(getUniqueValues([1,2,2,3,2,3,4,5,4,5,6,7,8]))