/*Q-1 ) Number of Good Pairs: (5 marks)
https://leetcode.com/problems/number-of-good-pairs/
Easy
Given an array of integers nums.
A pair (i,j) is called good if nums[i] == nums[j] and i < j.
Return the number of good pairs.
Example 1:
Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.*/



/**
 * @param {number[]} nums
 * @return {number}
 */
 var numIdenticalPairs = function(nums) {
    
    let  obj={}
     let count=0
     
     for (let i=0; i<nums.length; i++){
     if(obj[nums[i]]===undefined){
         obj[nums[i]]=1
     }
     
     else {
         
        count+=obj[nums[i]]
         obj[nums[i]]+=1

         
     }}
     
     return count
 };


 nu = [1,2,3,1,1,3]
 res1=numIdenticalPairs(nu)

 console.log(res1);


