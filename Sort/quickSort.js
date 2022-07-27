/*
    node sort/quickSort.js
    Merge Sort is based on divide and concoure approach
    Break the array by dividing it and     break it till only one element is 
    left in the breaked array
    now compare the left and right array element and sort it
*/
class QuickSort {
    constructor(array) {
        this.array = array;
    }

    piviot(firstIndex, lastIndex) {

        const piviot = this.array[lastIndex];
        let i = firstIndex -1;

        for (let j = firstIndex; j <= lastIndex-1; j++) {

            if(this.array[j] < piviot) {
                i ++;
                /* swap elements */
                const temp = this.array[i];
                this.array[i] = this.array[j];
                this.array[j] = temp;
            }

        }
        /* once sorting is done then swap the pivoit element with the last i+1 element */
        this.array[lastIndex] = this.array[i+1];
        this.array[i+1] = piviot;

        return i+1;

    }

    sort(firstIndex, lastIndex) {

        if(firstIndex < lastIndex) {

          let piviot =  this.piviot(firstIndex, lastIndex);
          
          this.sort(firstIndex, piviot-1);
          this.sort(piviot+1, lastIndex);

        }

    }
}

let quickSort = new QuickSort([4, 8, 7, 2, 11, 1, 3]);
quickSort.sort(0, quickSort.array.length -1);
console.log(quickSort.array);