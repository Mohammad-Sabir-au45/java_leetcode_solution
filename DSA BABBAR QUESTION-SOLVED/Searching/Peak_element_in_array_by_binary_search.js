/*Q-2 )Find Peak Element
https://leetcode.com/problems/find-peak-element/
(7.5 marks)
(Medium)
A peak element is an element that is strictly greater than its neighbors.
Given an integer array nums, find a peak element, and return its index. If the
array contains multiple peaks, return the index to any of the peaks.
You may imagine that nums[-1] = nums[n] = -∞.
You must write an algorithm that runs in O(log n) time */




/**
 * @param {number[]} nums
 * @return {number}
 */
 var findPeakElement = function(nums){

    let l = 0
    let r = nums.length-1


    while(l<=r){
        mid = Math.floor((l+r)/2)
        if((mid-1<0||nums[mid]>nums[mid-1]) && ((mid+1>=nums.length)||nums[mid]>nums[mid+1])){
            return mid
        }
        if(mid-1>= 0 && nums[mid-1]>=nums[mid]){
            r = mid-1
        }
        else if(mid+1 < nums.length && nums[mid+1]>=nums[mid]){
            l = mid+1
        }
    }
    return mid
    
};
    



array2= [1,2,3,1]

res2=findPeakElement(array2)

console.log(res2);