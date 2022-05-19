/*Q-1 ) Recursive implementation of atoi() function:(5 marks)
Atoi() function converts a string into an integer.
eg:
st = “1234” is a string.
if we perform,
st + 1
this results in error since “st” is a string and 1 is an integer, and,
st + “1”
this will append 1 into 1234. Giving us 12341.
write a function that converts the above variable ‘st’ into an integer (so that we
can perform mathematical operations on it).
Let’s call our function “myAtoiRecursive()”, it should*/


    // Recursive  program to compute atoi()
     
  
    function myAtoiRecursive(str, n)
    {
 
        // Base case (Only one digit)
        if (n == 1)
        {
            return str[0].charCodeAt() - '0'.charCodeAt();
        }
 
        // If more than 1 digits, recur for (n-1),
        // multiply result with 10 and add last digit
        return (10 * myAtoiRecursive(str, n - 1) + str[n - 1].charCodeAt() - '0'.charCodeAt());
    }

    
    st="1234" 
    let n = st.length;
    requireNumber=myAtoiRecursive(st,n)+1; 
    console.log(requireNumber);
    