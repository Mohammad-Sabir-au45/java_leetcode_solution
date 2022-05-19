
/*Q-2 ) Program for Sum of the digits of a given number:(5 marks)
Sample Input:
1234567
Sample output:*/




sumofdigits=(num)=>{

    if(num==0){
        return 0
    
    }
    return (num %10 + sumofdigits(Math.floor(num/10))) 
}
n=1234567
res2=sumofdigits(n)
console.log(res2);
