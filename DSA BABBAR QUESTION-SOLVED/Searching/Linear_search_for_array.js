/*Q - 1 ) You are given a 0-indexed integer array nums and a target
element target.
A target index is an index i such that nums[i] == target.
Return a list of the target indices of nums after sorting nums in
non-decreasing order. If there are no target indices, return an empty list.
The returned list must be sorted in increasing order.
Example 1:
Input: nums = [1,2,5,2,3], target = 2
Output: [1,2]
Explanation: After sorting, nums is [1,2,2,3,5].
The indices where nums[i] == 2 are 1 and 2.
https://leetcode.com/problems/find-target-indices-after-sorting-array/ */




/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var targetIndices = function(nums, target) {
    
    b=[];
   newarray=nums.sort((a,b)=>{
                     
                     return a-b;})

                   

                     for(let i=0; i<newarray.length; i++){

                        if(newarray[i]===target){

                            b.push(i)
                        }
                     }

                     return b
     
};


nums1 = [1,2,5,2,3], tar = 2


res=targetIndices(nums1,tar)

console.log(res);