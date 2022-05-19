/*Q-1 ) Intersection of Two Arrays
https://leetcode.com/problems/intersection-of-two-arrays/submissions/
(5 marks)
Given two integer arrays nums1 and nums2, return an array of their
intersection. Each element in the result must be unique and you may return
the result in any order.
Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
*/




/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    
      
    
    let obj= {}
    
    let ans=[];
    let ans2=[];
    for (ele of nums1){
    
           if(!obj[ele]){
               
               obj[ele]=1
           }
       else {
           obj[ele]+=1
       }
    }
    
       console.log(obj);
    
       for(let ele of nums2){
               
        if(obj[ele]>0){
            ans.push(ele)
            obj[ele]--
        }
    }
           console.log(ans);
           
           for(let i =0; i<ans.length; i++){
    
           
               
               if(!ans2.includes(ans[i])){
                   ans2.push(ans[i])
                   
               }}
       
           
    return ans2 
    };
    

  ar1=[4,9,5]
 
  arr2= [9,4,9,8,4]
  res1=intersection(ar1,arr2)
  console.log(res1);