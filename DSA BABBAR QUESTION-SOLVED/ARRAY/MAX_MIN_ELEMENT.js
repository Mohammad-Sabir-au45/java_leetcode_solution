


fun1=(array1)=>{

    let max=array1[0];
    let min=array1[0];

    len= array1.length;

    for(let i=0; i<len; i++){
if(max<array1[i]){

    max=array1[i]

    
}
    if(min>array1[i]){

    min=array1[i];
    
    
    
}}
return (`so the maximum element is ${max} and minimum element is ${min}`) ///the way to return two thing in single statement


}
arr= [1,2,5,8,0,18,15,60]

fun2=fun1(arr)
console.log(fun2);
