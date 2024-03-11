//##1 Write a function that takes a string as input and returns its length.

function stringLength(str){
   let length=str.length;
   let reverse=str.split('').reverse().join('');
    return length +" " +reverse
}
console.log(stringLength("sar;la"))