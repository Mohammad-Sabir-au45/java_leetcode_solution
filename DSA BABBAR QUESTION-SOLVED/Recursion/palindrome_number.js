/*Q-1 ) Check if a number is Palindrome: (5 marks)
Given an integer, write a function that returns true if the given number is
palindrome, else false.
For example,
Sample input:
12321
Sample output:
palindrome
eg2:
Sample input:
1451
Sample output:
not palindrome.*/

fun=(str,i,j)=>{


    if(str[i]===str[j]){


        if(i===j || i===j-1){

            return true
        }

        return fun(str,++i,--j);
        
    }
    else {
        
        return false}     
}


number=String(123321)
len=number.length
res1=fun(number,0,len-1)
console.log(res1);
