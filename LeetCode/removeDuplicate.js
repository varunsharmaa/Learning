var removeDuplicate = function (array) {

    let obj = {};
    const len = array.length;
    for (let i = 0; i <= array.length - 1; i++) {

        if (obj[array[i]]) {
            console.log(`deleting duplicate value from array`);
            array.splice(i, 1);
            i--;
        } else {
            console.log(`adding value to obj`);
            obj[array[i]] = 1;
        }
    } 
    return array;
}

var removeDuplicatesFromSortedArray = function(array) {

    for (i = array.length - 1; i >= 0; i--) { 
      if (array[i] === array[i - 1]) array.splice(i, 1)  
    }
  
    return array
  };


console.log('\n Remove Non Duplicate Array:', removeDuplicate([1,1,3,3,2,9,3,4,5]));
console.log('\n Remove Non Duplicate From Sorted Array:', removeDuplicatesFromSortedArray([1, 1,2,3,4,4,4,4,5,6,8,9,9,9]));