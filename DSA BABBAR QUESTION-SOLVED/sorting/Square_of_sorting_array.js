/*Q-1 ) Squares of a Sorted Array:(5 marks) (easy)
https://leetcode.com/problems/squares-of-a-sorted-array/
Given an integer array nums sorted in non-decreasing order, return an array of the
squares of each number sorted in non-decreasing order.
Example 1:
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

    
 function merge(A,l,m,r){ //O(n) time
    n1 = m-l+1
    n2 = r-m
    L = []
    for(let i = 0;i<n1;i++){
        L[i] = A[l+i]
    }
    R = []
    for(let j = 0;j<n2;j++){
        R[j] = A[m+1+j]
    }
    //I have L and R and blank C
    i = 0
    j = 0
    k = l
    while(i<n1 && j<n2){
        if(L[i]<R[j]){
            A[k]=L[i]
            i++
        }
        else{
            A[k] = R[j]
            j++
        }
       k++ 
    } //untill one of the arrays get over

    while(j<n2){
        A[k]=R[j]
        j++
        k++
    }// when L is over but R has some numbers remaining
    while(i<n1){
        A[k]=L[i]
        i++
        k++
    }// when R is over but L has some numbers remaining
    // return A
    // console.log(A,L,R,l,m,r);

    return A
}




   function mergeSort(A,l,r){

    let m = Math.floor((l+r)/2)
    if(l<r){
        mergeSort(A,l,m)
        mergeSort(A,m+1,r)
        merge(A,l,m,r)
    }
    
        }
    
    function sortedSquares(B){

        let A=B.map((element) => element**2)
        
       let l=0
       let  r = A.length-1
         mergeSort(A,l,r)
        return A}

B =[-4,-1,0,3,10]

res=sortedSquares(B)
console.log(res);



