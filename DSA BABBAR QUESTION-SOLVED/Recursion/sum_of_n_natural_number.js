/*Q-3 ) Given a number n, find sum of first n natural numbers:(5 marks)
Examples :
Input : 5
Output : 15
Explanation : 1 + 2 + 3 + 4 + 5 = 15
Input : 7
Output : 28
Explanation : 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28*/

sumofnaturalnum=(num3)=>{
    if(num3==1){

        return 1
    }
    return num3 +  sumofnaturalnum(num3-1)

}

res3=sumofnaturalnum(7);
console.log(res3);