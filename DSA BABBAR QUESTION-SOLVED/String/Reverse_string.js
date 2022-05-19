
/*Q-1 ) Reverse String (7.5 marks)
https://leetcode.com/problems/reverse-string/
Write a function that reverses a string. The input string is given as an array of characters s.
You must do this by modifying the input array in-place with O(1) extra memory.*/



///string in array

var reverseString = function(s) {
    let i = 0;
    let j = s.length-1
    while(j>i){


        temp=s[i]
        s[i]=s[j]
        s[j]=temp
        // [s[i],s[j]]=[s[j],s[i]]
        j--;
        i++;

        console.log(i,j);
    }
    return s;
};



 let str = "helo"                                          

res1=reverseString(str)                                  // or take input in array 
console.log(res1);
  


///OR



/*Q-1 ) Reverse String (7.5 marks)
https://leetcode.com/problems/reverse-string/
Write a function that reverses a string. The input string is given as an array of characters s.
You must do this by modifying the input array in-place with O(1) extra memory.*/
function myfunc(s){
  if (s.length === 0){

    return ""  }
  else {

      res3=(myfunc(s.slice(1)) + s[0]);
  }
  return res3

}
var reverseString = function(s) {
    return myfunc(s).split("")

}




arr=["h","e","l","l","o"]
res1=reverseString(arr)
console.log(res1);



// if only string is there 


/*Q-3 ) Reverse a string using recursion:(5 marks)
If we have a string, write a function that prints reverse of that string, using
recursion.
Sample Input:
ABCD
Sample Output:
DCBA*/


// function reverseString(str) {
//     if (str === "")                                                   //another method               
//       return "";
//     else
//       return reverseString(str.substr(1)) + str.charAt(0);
//   }
  

var reverseString = function(s) {
    

    if (s.length ===0){
  
      return ""  }
    else {
  
        return reverseString(s.slice(1)) + s[0];
    
  }
  
  };
    res3=reverseString("ABCD");                               //we can use above method also  by using split function 
  console.log(res3);
  