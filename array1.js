//Program to create a new array from an existing array


var b = [];
var size = prompt('Enter the size of array:');

for(var a=0; a<size; a++) 
{


    b[a] = prompt('Enter  the array Element :' );
}
console.log(b);
const map1 = b.map(x=>x*4);
console.log("The new array is: ")
console.log(map1);