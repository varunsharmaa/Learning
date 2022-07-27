/* 
    node array/shift.js
    Shift is used to delete the first elements from an array
*/
console.log(`
    -----------------Shift------------------------
`);

let shiftArray = [2,4,5,3,8,9,0,7];
console.log(`
    Original Array: ${shiftArray}
`);

let shift = shiftArray.shift();
console.log(`
    Return From Shift: ${shift}
`);

console.log(`
    Array after Shift: ${shiftArray}
`);


/* 
    node array/shift.js
    UnShift is used to add the elements at firts position of an array
*/
console.log(`
    -----------------Un-Shift------------------------
`);


let unshift = shiftArray.unshift(4,5,6);
console.log(`
    Return From Un-Shift: ${unshift}
`);
console.log(`
    Array after Un-Shift: ${shiftArray  }
`);