// Return median of two sorted arrays of the same size


const a = [1,2,9];
const b = [3,4,7];
const n = a.length;
let  c = [];


// Anonymous Function

var median = function (){
    for(var i=0, j=0; i<n || j<n;){
 
    
        if (a[i]<b[j]){
            c.push(a[i]);
            i++;
            
        }
        else if (a[i]>b[j]){
            c.push(b[j]);
            j++;
            
        }
        else if(i<n){
            c.push(a[i]);
            i++;
        }
        else if (j<n){
            c.push(b[j]);
            j++;
        }
        
        }

   
  
console.log(c);
console.log((c[n-1] + c[n]) / 2)
    }


    median();

// -----------------------------------------------------------

// IIFE Function


(function (){
    for(var i=0, j=0; i<n || j<n;){
 
    
        if (a[i]<b[j]){
            c.push(a[i]);
            i++;
            
        }
        else if (a[i]>b[j]){
            c.push(b[j]);
            j++;
            
        }
        else if(i<n){
            c.push(a[i]);
            i++;
        }
        else if (j<n){
            c.push(b[j]);
            j++;
        }
        
        }

   
  
console.log(c);
console.log((c[n-1] + c[n]) / 2)
    }) ();




