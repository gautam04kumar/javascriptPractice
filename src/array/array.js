//#1 Accessing Array Elements: Create an array called fruits with the elements "apple", "banana", "orange". Access the second element of the array and log it to the console.

let fruits =["apple", "banana", "orange"]
console.log(fruits[1])

// Adding Elements: Add the element "grape" to the end of the fruits array.
console.log(fruits.unshift("grape"),fruits) 

// Removing Elements: Remove the first element from the fruits array.
console.log(fruits.shift("grape"),fruits)

// Iterating over Array: Create an array called fruits with the elements "apple", "banana", "orange"". Use a loop to log each element of the array to the console.

for(i=0;i<fruits.length;i++)
{
 console.log(fruits[i])
}
// Array Methods: Use the join() method to join all elements of the fruits array into a single string separated by commas.
console.log(fruits.join(','))

// Sorting Arrays: Sort the elements of the numbers array in ascending order.
console.log(fruits.sort())

// Checking for Element Existence: Check if "orange" exists in the fruits array. Log the result to the console.
console.log(fruits.includes("orange"))

// Slicing Arrays: Create a new array called slicedColors by extracting elements "green" and "blue" from the colors array.

let colours=["red", "green", "blue"]
console.log(colours.slice(1))

// Concatenating Arrays: Concatenate the fruits array with the colors array into a single array called combinedArray.
let combinedArray=fruits.concat(colours)
console.log(combinedArray)

// ## Write a function that takes an array of numbers and returns the sum of all the numbers in the array

// ## Write a function that takes an array of numbers and returns the largest number in the array.

function arraySum(arr){

    let sum=arr.reduce((acc,cur)=>acc+cur)
    let maxNum=Math.max(...arr)

    return `sum is: ${sum} maximum no. is:${maxNum} `

}
console.log(arraySum([10,3,4,2]))