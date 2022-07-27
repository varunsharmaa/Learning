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
    from start index to the number of elements to get
*/
console.log(`
    -----------------Slice------------------------
`);

let sliceArray = [2,4,5,3,8,9,0,7];
console.log(`
    Original Array: ${sliceArray}
`);

let slice = sliceArray.slice(0,2);
/* start index and number of elements to delete */
console.log(`
    Return From Slice: ${slice}
`);

console.log(`
    Array after Slice: ${sliceArray}
`);