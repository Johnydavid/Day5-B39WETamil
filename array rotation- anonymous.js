// Rotate an array by k times


a = [1,2,3,4,5];
k = 1;
n = a.length
var rotate = [];


// Anonymous Function

var rotation = function () {
if (k>n){
    k = k%n
}

for (i = 0; i<n; i++){
    if (i<k)
    {
        rotate.push(a[n + i-k]);
    }
    else{
    
        rotate.push(a[i-k])
        
    }
}

console.log(rotate);
}

rotation();

// ----------------------------------------------------

// IIFE Function

( function () {
    if (k>n){
        k = k%n
    }
    
    for (i = 0; i<n; i++){
        if (i<k)
        {
            rotate.push(a[n + i-k]);
        }
        else{
        
            rotate.push(a[i-k])
            
        }
    }
    
    console.log(rotate);
    }) ();


