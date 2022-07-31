var mergeTwoLists = function(list1, list2) {
    
    let sortedList = [];
    while (list1 && list1.length>=0 && list2 && list2.length>=0) {
        
        if(list1[0] < list2[0]) {
            sortedList.push(list1.shift())
        } else {
            sortedList.push(list2.shift())
        } 
    }
    return [...sortedList, ...(list1 || []), ...(list2 || [])];
    
    
};

console.log(mergeTwoLists());
