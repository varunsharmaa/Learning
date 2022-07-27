/* 
    [3,5,9,10,12,15,44,50,67,77,87]
    Binary search is used to find out the element in the sorted array
    fastest search
*/
class BinarySearch {

    constructor(array, itemToSearch) {
        this.array =  array;
       this.itemToSearch = itemToSearch;
    }
   
    searchElement(startIndex, lastIndex) {

        const mid = Math.floor((startIndex + lastIndex)/2);
      
        if(this.itemToSearch === this.array[mid]) {
            console.log(`
            item matched at index: ${mid}
            `);
        }
        else if(this.itemToSearch < this.array[mid]) {
            console.log(`
             Item is less 
             start index: ${startIndex} -- last index: ${mid-1}`);
            this.searchElement(startIndex, mid-1);
            return;
        }
        else if(this.itemToSearch > this.array[mid]) {
            console.log(`
            Item is greater
            start index: ${mid+1} -- last index: ${lastIndex}`);
            this.searchElement(mid+1, lastIndex);
            return;
        }
        else {
            console.log(`
            No item matched`);
            return;
        }
    }

}


let search = new BinarySearch([3,5,9,10,12,15,44,50,67,77,87], 3);
search.searchElement(0, search.array.length -1);