/*Q-3 ) Sort Colors
  https://leetcode.com/problems/sort-colors/submissions/
  (5 marks)
  Given an array nums with n objects colored red, white, or blue, sort them in-place
  so that objects of the same color are adjacent, with the colors in the order red,
  white, and blue.
  We will use the integers 0, 1, and 2 to represent the color red, white, and blue,
  respectively.
  You must solve this problem without using the library's sort function.
  Example 1:
  Input: nums = [2,0,2,1,1,0]
  Output: [0,0,1,1,2,2]
*/


  /**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    
    
    return nums.sort((a,b)=>{
        
        return a-b
    })
    
};


nums = [2,0,2,1,1,0]
res4=sortColors(nums)
console.log(res4);