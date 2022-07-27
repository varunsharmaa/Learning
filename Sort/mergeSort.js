/*
    node sort/mergeSort.js
    Merge Sort is based on divide and concoure approach
    Break the array by dividing it and     break it till only one element is 
    left in the breaked array
    now compare the left and right array element and sort it
*/

class MergeSort {
    constructor(array) {
        this.array = array;
    }

    sort(leftArray, rightArray) {
        let sortedArr = [];
        while(leftArray.length && rightArray.length) {
            if(leftArray[0] < rightArray[0]) {
                sortedArr.push(leftArray.shift())
            } else {
                sortedArr.push(rightArray.shift())
            }
        }
        return [ ...sortedArr, ...leftArray, ...rightArray ];
    }

    mergeSort(array) {
        if(array.length < 2) {
            return array;
        }
        const mid = Math.floor(array.length/2);
        const leftArray = array.splice(0, mid);
       return this.sort(this.mergeSort(leftArray), this.mergeSort(array));
    }
    
}

let mergeSort = new MergeSort()
console.log(mergeSort.mergeSort([4, 8, 7, 2, 11, 1, 3]));