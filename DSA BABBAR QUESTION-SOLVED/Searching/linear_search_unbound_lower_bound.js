/*Q - 1 ) Write a program to find the upper bound (first occurrence’s index) of
a target given by the user, that should be present in the list. Using linear
search.
eg:
A= [1,1,1,2,2,2,3,3,4]
lower bound of 2 = 3
upper bound of 2 = 5
Your code should return 5.
Write time complexity of your code. */


search= (array1,target)=>{

    ans=[]
    for (let i=0; i<array1.length; i++ ){
         

        if (array1[i]==target){

            
            ans.push(i);

            console.log(ans);
        }




    }

    return(`lower bound of ${target} is ${ans[0]} and upperbound is ${ans[ans.length-1]}`)
}

tar=require("prompt-sync")()("enter the input number")
arr=[1,1,1,2,2,2,3,3,4]

res1=search(arr,tar)

console.log(res1);




/*Q - 2 ) Solve question 1 , but use binary search search. */


