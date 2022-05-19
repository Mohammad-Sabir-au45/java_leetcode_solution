/*Q-2 ) Write a function that prints digits of a number from left to right , using
recursion:(5 marks)
Sample Input:
1234567
Sample output:
1
2
3
4
5
6
7  */

fun=(num,i)=>{
    console.log(num[i]);
  
   if (i===num.length-1){
  
    return
  
   }
           
   fun(num,i+1);
  
  }
  num1=String(1234567)
  res1=fun(num1,0)
  console.log(res1);
  