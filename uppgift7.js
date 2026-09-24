/* Lösning till Uppgift 7. Av Jingye Chen, 2026 */
"use strict";

let numbers = [3, 4, 5, 10, 87, 16];

function calculateSum(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum = sum + numbers[i];
    }
    return sum;
}

console.log("Summa är: " + calculateSum(numbers));