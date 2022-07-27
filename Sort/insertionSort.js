/*
    Insertion sort is used to sort the element by iterating through the 
    elements and conparing with all the left item and if the left item is 
    > the then matching item then replace it 
    ex: 
    array [9,3,1,2,6,7,2,5];
    for 1st iteration pick 3 and check if 9 > 3 then replace with 9
        after 1st iteration [3,9,1,2,6,7,2,5]
    for 2nd iteration  pick 1 
        now left elements in array is 3,9
            1 < 9 then replace 1 with 9 [3,9,9,2,6,7,2,5]
        now 1 < 3 then replace 3 with next  item [3,3,9,2,6,7,2,5]
        now there are no iten in the left element which is greate then 1 
        now replace 3 with 1 [1,3,9,2,6,7,2,5]
     */
class InsertionSort {
        constructor(array){
            this.array = array;
            console.log('\x1b[46m', `Unsorted Array: ${array}`);
        }
        sort() {

            const length = this.array.length;

            for(let i=1; i<length-1; i++) {

                let key = this.array[i];
                let j = i-1;

                console.log(`key: ${key}`);

                while(j>=0 && this.array[j] > key) {
                    this.array[j+1] =  this.array[j];
                    j --;

                }
                this.array[j+1] = key;
                console.log(`Array after iteration ${i} : ${ this.array}`);

            }

    }   

}

let insertionSort = new InsertionSort([9,3,1,2,6,7,2,5]);

insertionSort.sort();