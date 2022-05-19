/*Q-3 ) Write a program to perform selection sort without using an auxiliary
(extra) list, and tell the time complexity and space complexity of your
code. (    */



selectionSort=function(A){

    for(let i=0; i<A.length; i++){
        let min = i

        for(let j =i+1; j<A.length; j++){

            if(A[j]<A[min]){

                min=j
            }
        }

            [A[min],A[i]]=[A[i],A[min]]
    
    }


    return A


}

AR1=[3,6,2,7,4,1,0]
res4=selectionSort(AR1)
console.log(res4);

