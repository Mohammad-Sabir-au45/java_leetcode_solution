/*Q-2 )Sum of Unique Elements:
https://leetcode.com/problems/sum-of-unique-elements/
(5 marks)
You are given an integer array nums. The unique elements of an array are the elements that appear
exactly once in the array.
Return the sum of all the unique elements of nums.
Example 1:
Input: nums = [1,2,3,2]
Output: 4
Explanation: The unique elements are [1,3], and the sum is 4.*/




/**
 * @param {number[]} nums
 * @return {number}
 */
 var sumOfUnique = function(nums) {
    
    
    
    let obj={}
 
    
    for (ele of nums){
        
        if(obj[ele]===undefined){
            obj[ele]=1
           
        }
        else{
            
            obj[ele]+=1  
        }
        

    }
      
    
     let    sum=0;
     for ( let num in obj){
         
         if(obj[num]===1){
             
           
             sum = sum + Number(num)
         }
     }
    
    return sum
    
};

n2=[1,2,3,2]
res2=sumOfUnique(n2)
console.log(res2);