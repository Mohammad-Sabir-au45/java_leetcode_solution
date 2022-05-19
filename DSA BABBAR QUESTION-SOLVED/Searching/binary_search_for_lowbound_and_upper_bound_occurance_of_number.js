
/*Q-1 )Find First and Last Position of Element in Sorted Array
https://leetcode.com/problems/find-first-and-last-position-of-element-in-sor
ted-array/
(7.5 marks)
(Medium)
Given an array of integers nums sorted in ascending order, find the starting and
ending position of a given target value.
If target is not found in the array, return [-1, -1].
You must write an algorithm with O(log n) runtime complexi */

//lower bound and upper bound for many occurance of a number in array

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    
    arr=[-1,-1]
  let l=0;
  let r=nums.length-1;
  
  while(l<=r){
      
      let mid = Math.floor((l+r)/2);
      
      if(target===nums[mid]){

           arr[0]=mid;
           r=mid-1;
      }
      else if(target<nums[mid]){
          
          r=mid-1
         }

      else { l=mid+1;}  
      
  }

let left=0;
let right =nums.length-1;

  while(left<=right){
      
      let mid = Math.floor((left+right)/2);
      
      if(target===nums[mid]){

           arr[1]=mid;
           left=mid+1;
      }
      else if(target<nums[mid]){
          
          right=mid-1
         }

      else { left=mid+1;}  
      
  }
   
   return arr
  
};

let array1=[5,7,7,8,8,10]

let tar=8;

res1=searchRange(array1,tar)
console.log(res1);







