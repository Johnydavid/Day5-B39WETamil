// Convert all the strings to title caps in a string array



const fruits = ["Apple", "ORANGE", "Banana", "grApes"];

// Anonymous Arrow Function

let caps = () => {
    for (i of fruits){
       let low =  i.toLowerCase()
           console.log(low[0].toUpperCase() + low.slice(1));

    }
}

caps();

// ---------------------------------------------------





//  IIFE  Arrow function

(  () => {
    for (i of fruits){
        let low = i.toUpperCase()
        console.log(low[0]+low.slice(1).toLowerCase()) 
        
    }
}) ();





