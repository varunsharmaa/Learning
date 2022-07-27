var twoSum = function(nums, target) {
    for (let i=0; i<=nums.length-1; i++)
         {

             const b = target - nums[i];
             let j = i+1;
             while(j>0 && j<=nums.length-1) {
                 if(nums[j] === b) {
                    return [i, j];
                 }
                 j++;
             }
  
         }    
    
};


var twoSumUsingObj = function(nums, target) {
    let obj= {};
    for (let i=0; i<=nums.length-1; i++)
         {

            const b = target - nums[i];
            
            if (nums[i] in obj) {
                return [obj[nums[i] ],i];
            } else {
                obj[b] = i;
            }
          
         } 
       
    
};
console.log('Two Sum Using Obj:', twoSumUsingObj([3,2,4], 6));
//console.log('Two Sum:', twoSum([2,11,15,5,0,3,2,1,5,5,7], 9));