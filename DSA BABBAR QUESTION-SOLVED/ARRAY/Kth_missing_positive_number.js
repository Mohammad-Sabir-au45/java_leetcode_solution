// Q2. Kth Missing Positive Number (A very important question)
// https://leetcode.com/problems/kth-missing-positive-number/
// Given an array arr of positive integers sorted in a strictly increasing order, and
// an integer k.
// Find the kth positive integer that is missing from this array.


/**
 * @param {number[]} 
 * @param {number} 
 * @return {number}
 */
 var findKthPositive = function(arr, k) {
    let b=[]
     for (let i =1; i <=2000 ; i++){
         
         if (!arr.includes(i)){
 
             b.push(i)
     }  
 }
     return b[k-1]
 };


 array1= [3,6,8,9,10]
 k=5
 res2= findKthPositive(array1,k)
 
 console.log(res2);
