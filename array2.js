//Program to insert an element at a specified location in an array

var b = [];
var size = prompt('Enter array size:');

for(var a=0; a<size; a++) 
{


    b[a] = prompt('Enter array Element :');
}
console.log(b);
const n =prompt("Enter the index where element is to be inserted:");
const k =prompt("Enter the element to be inserted:");
b[n]=k;
console.log("The new array is:");
console.log(b);