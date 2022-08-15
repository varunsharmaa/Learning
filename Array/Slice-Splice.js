/* 
    node array/Slice-Splice.js
    Splice is used to delete the elements from an array
    it returns the delete element and update the original array
*/
console.log(`
    -----------------Splice------------------------
`);
let array = [2,4,5,3,8,9,0,7];
console.log(`
    Original Array: ${array}
`);

let deleted = array.splice(0,2);
/* start index and number of elements to delete */
console.log(`
    Return From Splice: ${deleted}
`);

console.log(`
    Array after Splice: ${array}
`);


/* 
    node array/Slice-Splice.js
    Slice is used to get the elements from an array
    from start index to the end index of elements to get
*/
console.log(`
    -----------------Slice------------------------
`);

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]

console.log(animals.slice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]