// Sum of all numbers in an array using anonymous function

const arr = [1,2,3,4,5];


var add = function () {
    let sum = 0;
    for (i of arr){
        sum += i;
    }
    console.log(sum);

}

add();


// -------------------------------------------


// Sum of all numbers in an array using IIFE (Immediately Invoked Function Expression) function

const arr1 = [2,4,6,8,10];

(function () {
    let add = 0;
    for (i of arr1){
        add += i;
    }
    console.log(add);

} ) ();




