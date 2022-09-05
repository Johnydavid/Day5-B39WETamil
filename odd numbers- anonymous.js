// Print odd numbers in an Array

const arr = [1,2,3,4,5,6,7,8,9,10];


let arr1 = [];

//  Printing odd numbers using normal function with name

// function odd (){
//     for (i of arr){
//         if (i % 2 !== 0){
//             arr1.push(i);
//         }
//     }
//     console.log(arr1);
//     }
    
//     odd();

    // ---------------------------------------------


// Printing odd numbers using anonymous function


// var odd = function (){
//     for (i of arr){
//         if (i % 2 !== 0){
//             arr1.push(i)
//         }
//     }
//     console.log(arr1)
// }

// odd();

// ------------------------------------------


// Printing odd numbers using IIFE function

( function () {
    for (i of arr){
        if (i % 2 !== 0){
            arr1.push(i)
        }
    }
    console.log(arr1)
}) ();


