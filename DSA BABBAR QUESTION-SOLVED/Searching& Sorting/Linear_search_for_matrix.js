/*Q-2) Given a m x n matrix grid which is sorted in non-increasing
order both row-wise and column-wise, return the number of
negative numbers in grid.
Example 1:
Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.
https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matri */




/**
 * @param {number[][]} grid
 * @return {number}
 */
 var countNegatives = function(grid) {


    c=[];
    sum=0;

      for(let i=0; i<grid.length; i++){
 
                
    newarray=grid[i].sort((a,b)=>{
                      
                      return a-b;})

                      console.log(newarray);

                      for(j=0; j<grid[i].length; j++){


                        if(grid[i][j]<0){


                            sum+=1;
                        }
                      }                   
    
}

return sum

}



 matrix= [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]

 res2=countNegatives(matrix)
 console.log(res2);