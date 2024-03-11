//## Write a function that takes an array of numbers and returns the sum of all the numbers in the array

//## Write a function that takes an array of numbers and returns the largest number in the array.

function arraySum(arr){

    let sum=arr.reduce((acc,cur)=>acc+cur)
    let maxNum=Math.max(...arr)

    return `sum is: ${sum} maximum no. is:${maxNum} `

}
console.log(arraySum([10,3,4,2]))