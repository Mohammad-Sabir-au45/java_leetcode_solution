
/*Q-2 )Sqrt(x)
https://leetcode.com/problems/sqrtx/
(7.5 marks)
(Easy)
Given a non-negative integer x, compute and return the square root of x.
Since the return type is an integer, the decimal digits are truncated, and only the
integer part of the result is returned.
Note: You are not allowed to use any built-in exponent function or operator, such
as pow(x, 0.5) or x ** 0.5.
Example 1:
Input: x = 4
Output: 2
Example 2:
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since the decimal part is
truncated, 2 is returned.
Marks distribution:*/





/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    
    let l = 1;
    let r = x;
    
    while(l<=r){
        
        mid= Math.floor((l+r)/2);
        
        if(mid*mid<x){
             
            l=mid+1
        }
        
        else if(mid*mid>x){
            
            r=mid-1
        }
        
        else return mid
    }
    
    return r
    
};


res2=mySqrt(8)

console.log(res2);