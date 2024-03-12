//###QArray Filtering: Write a function called filterEvenNumbers that takes an array of numbers
//  as input and returns a new array containing only the even numbers.
function filterEvenNumbers(arr){
    return arr.filter((arr)=> arr%2 == 0)
}
console.log(filterEvenNumbers([1,2,3,4,5,6,7,8]))