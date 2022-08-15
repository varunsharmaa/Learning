/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.

Example:
Input: nums = [1,3,5,6], target = 5
Output: 2

Input: nums = [1,3,5,6], target = 2
Output: 1

*/

var searchInsert = function (nums, target) {

    return search(0, nums.length-1, nums, nums.length-1,  target);
};

function search(startIndex, endIndex, items, length, itemToSearch) {
    const mid = Math.floor((startIndex + endIndex) / 2);
    
    if (endIndex === 0 || endIndex === -1) {
        if (itemToSearch <= items[0]) {
            return 0;
        } else if (itemToSearch >= items[0]) {
            return  1;
        }
    }
    if((startIndex === length && endIndex === length)) {
        if (itemToSearch <= items[startIndex]) {
            return startIndex;
        } else if (itemToSearch > items[startIndex]) {
            return  startIndex + 1;
        }
    }
   
   

    if (items[mid] === itemToSearch) {
        return mid;
    }else if (itemToSearch < items[mid]) {
        return search(startIndex, mid - 1, items,length, itemToSearch);
    } else if (itemToSearch > items[mid]) {
            if(itemToSearch < items[mid+1]) {
                return mid + 1
            }
        return search(mid + 1, endIndex, items,length, itemToSearch);
    }
    return -1;
}

console.log('SEARCH INDEX: ', searchInsert([1,3,5,6], 4));