// Return all the palindromes in an array

// Anonymous Arrow Function

const arr = ["madam", "john", "did"];

// const palindromes =  () => {
    
// let pal = arr.filter(w => {
//   let len = w.length;
//   for (let i = 0; i < len / 2; i++) {
//     return (w[i] == w[len - i - 1]) 
//       }
// });
// console.log(pal)
// }

// palindromes();

// ------------------------------------------------------------




// -----------------------------------------------------------------------------------

// IIFE Arrow Function

( () => {
    
    let pal = arr.filter(w => {
      let len = w.length;
      for (let i = 0; i < len / 2; i++) {
        return (w[i] == w[len - i - 1]) 
          }
    });
    console.log(pal)
    }) ();









