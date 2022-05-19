
/*Q-1 )Find the Duplicate Number:
https://leetcode.com/problems/find-the-duplicate-number/ (Solve the above
using both the approaches discussed in class) and comment on time
complexity.
:(5 marks)
Given an array of integers nums containing n + 1 integers where each integer is
in the range [1, n] inclusive.
There is only one repeated number in nums, return this repeated number.
You must solve the problem without modifying the array nums and uses only
constant extra space.*/



/**
 * @param {number[]} nums
 * @return {number}
 */
 var findDuplicate = function(nums) {
    
    let obj={}
  let    count=0;
    
    for (ele of nums){
        
        if(obj[ele]===undefined){
            obj[ele]=1
        }
        
        
        
        else{
            
           count=ele
            obj[ele]+=1            
        }
    }
    
    return count
    
};
n1 = [1,3,4,2,2]

res1=findDuplicate(n1)
console.log(res1);

