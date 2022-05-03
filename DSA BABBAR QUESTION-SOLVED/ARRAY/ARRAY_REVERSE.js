//reverse the array

//method1

fun=(arr)=>{

    revarray=[];

   let  len=arr.length
    for (let i=0;   i<len ; i++){
        

        revarray.unshift(arr[i])


    }

    return revarray
}


array1=[2,3,5,8,9,10]

fun2=fun(array1)
console.log(fun2);



// /method2

fun1=(arr2)=>{

    revarray=[];

   let  len=arr2.length
    for (let i=len-1;   i>=0 ; i--){
        

        revarray.push(arr2[i])


    }

    return revarray
}


array2=[2,3,5,8,9,10]

fun3=fun1(array2)
console.log(fun3);