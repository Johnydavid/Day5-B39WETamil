// Remove duplicates from an array

// Anonymous Function 

const ar = [1,2,6, "john", "david","john", 2,1,5,6,2];
let d = [];


var duplicate = function () {
for (i of ar){
    let dup = true;
    for (j of d){
        if (i === j){
            dup = false;
            break;
        }
    }
   if (dup == true){
       d.push(i);
    //    d.sort(); This will sort the values in ascending order
   } 
}

console.log(d);
}

duplicate();

// --------------------------------------------------------------------------


// IIFE function


(function () {
    for (i of ar){
        let dup = true;
        for (j of d){
            if (i === j){
                dup = false;
                break;
            }
        }
       if (dup == true){
           d.push(i);
       } 
    }
    
    console.log(d);
    }) ();
    
    