function runningSum(A){
    R = [A[0]]
    for(let i=1;i<A.length;i++){
        R.push(R[i-1]+A[i])
        
    }
    return R
}

function sum(i,j,R2){
    return i>0?R2[j]-R2[i-1]:R2[j]
    // if(i>0){
    //     return R[j]-R[i-1]
    // }
    // else {
    //     return R[j]
    // }

}

A = [8,5,6,3,9,8,3,9,1,8]
R = runningSum(A)
i = 3
j = 6
res = sum(i,j,R)

console.log(R);
console.log(res);