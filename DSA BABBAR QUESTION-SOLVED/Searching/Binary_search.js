/*Q-1 )Binary Search
https://leetcode.com/problems/binary-search/
(Easy)
(7.5 marks)
Given an array of integers nums which is sorted in ascending order, and an
integer target, write a function to search target in nums. If target exists,
then return its index. Otherwise, return -1.
You must write an algorithm with O(log n) runtime complexity. */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    
    
    let l=0;
    let r=nums.length-1;
    
    while(l<=r){
        
        let mid = Math.floor((l+r)/2);
        
        if(target===nums[mid]){

            return mid  
        }
        else if(target<nums[mid]){
            
            r=mid-1
           }

        else { l=mid+1;}  
        
    }
     
     return -1
    
};
let array1=[2,5,7,9,12,50,61]

let tar=5;

res1=search(array1,tar)
console.log(res1);