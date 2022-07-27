/*
    Bubble Sort is used to sort the item by itetration through the list
    and swapping the items     
*/
class BubbleSort {

        swap(array, firtsSwapElementIndex, secondSwapElementIndex) {
            const temp = array[firtsSwapElementIndex];
            array[firtsSwapElementIndex] = array[secondSwapElementIndex];
            array[secondSwapElementIndex] = temp;
        }
        sort(array) {
            let length = array.length;
            for(let i=0; i < length-1; i++) {
                /* 
                    reduce the number of iteration as elements are
                    getting sorted and getting placed in their position , 
                    so everytime we iterate number off iteration will also reduce
                */
                for(let j=0; j < length-i -1; j++) {
                    if (array[j] > array[j+1])
                    {
                        this.swap(array,j,j+1);
                    }
                }

            }
            console.log('\x1b[46m', `Sorted Array: ${array}`);
        }
}
let bS = new BubbleSort();
bS.sort([64, 34, 25, 12, 22, 70, 90]);