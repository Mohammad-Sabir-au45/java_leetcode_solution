/*Q - 3) Two Sum (5 marks) (Easy)
https://leetcode.com/problems/two-sum/
Given an array of integers nums and an integer target, return indices of the two
numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may
not use the same element twice.
You can return the answer in any order.
Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1]. */




/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    
    ht={};
    for (let i=0; i<nums.length; i++){
        missing= target- nums[i];
        
        if(missing in ht){
            
            return [i,ht[missing]]
        }
        
        ht[nums[i]]=i                              

    
    
    }
    
};



n1 = [2,7,11,15],
tar = 9


res3=twoSum(n1,tar)
console.log(res3);