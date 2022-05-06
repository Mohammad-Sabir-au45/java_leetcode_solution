
 var searchnumber = function(grid,target) {

    numberisavailable=false
      for(let i=0; i<grid.length; i++){
 
                
    newarray=grid[i].sort((a,b)=>{
                      
                      return a-b;})

                      console.log(newarray);
                      for(j=0; j<grid[i].length; j++){


                        if(grid[i][j]===target){

                       numberisavailable=true

                        }


                      }     }      
                      
return numberisavailable
    

                    }


 matrix= [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
 tar= 3;
 res2=searchnumber(matrix,tar)
 console.log(res2);