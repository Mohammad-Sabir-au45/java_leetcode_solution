/*Q-4 ) [Bonus Question] Recursive implementation of binary search:
(5 extra marks)
We have seen an iterative approach for binary search algorithm , write a
recursive approach for that.
HINT: when we divide the array into two parts, we need to perform a search on only one half.
Apply binary search only on that half.
Marks distribution:
Question 1,2 and 3 carry 5 marks each.*/


binarySearch = (arr,val,left,right) => {

    
    let mid = Math.floor((left + right)/2 )
  if (arr[mid] === val) {
    return mid
  }
 
  if (arr[mid] < val) {
    return binarySearch(arr,val,mid+1,right)
  }
  
  if (arr[mid] > val) {
    return binarySearch(arr,val,left,mid-1)
  }
  

}


arr1=[1,2,4,6,8,9]
target=9;
let l=0;
let r=arr1.length-1;
res6=binarySearch(arr1,target,0,r)
console.log(res6)