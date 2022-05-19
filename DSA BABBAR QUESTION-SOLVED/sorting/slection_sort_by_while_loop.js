/*Q-4 )[BONUS QUESTION] Write a while loop implementation of selection
sort? (5 marks) */


selection=function(A){
    let i=0
    n=A.length
  while(i<n){
      let min = i

      console.log(i);

      let j =i+1


      while(j<n){

          if(A[j]<A[min]){

              min=j
             

              console.log(j);
          }


          j++;
      }

          [A[min],A[i]]=[A[i],A[min]]
      i++;

      console.log(i);

  }


  return A


}

arr1=[3,6,2,7,4,1,0]
res7=selection(arr1)
console.log(res7);