// Return all the prime numbers in an array using  anonymous function & IIFE

const ar = [1,2,3,4,5,6,7,8,9,10,11, 13, 39, 31];

const pr = [];

// Normal function invoking method
function prime (){
    for (i of ar){
        if (i>=2){
            let prime = true;
            for (j = 2; j<i; j++){
                if (i % j === 0){
                    prime = false;
                    break;
                }
            }
            if (prime ==true){
            pr.push(i);
            }
        }
    }
    
   console.log(pr);
   }
   
   prime();
// ---------------------------------------------------------------------

//  Anonymous function


var prime = function (){
    for (i of ar){
        if (i>=2){
            let prime = true;
            for (j = 2; j<=i/2; j++){
                if (i % j === 0){
                    prime = false;
                    break;
                }
            }
            if (prime ==true){
            pr.push(i);
            }
        }
    }
    
   console.log(pr);
   }
   
   prime();

//    -------------------------------------------------------------------------

// IIFE Function

( function (){
    for (i of ar){
        if (i>=2){
            let prime = true;
            for (j = 2; j<=i/2; j++){
                if (i % j === 0){
                    prime = false;
                    break;
                }
            }
            if (prime ==true){
            pr.push(i);
            }
        }
    }
    
   console.log(pr);
   }) ();

   


