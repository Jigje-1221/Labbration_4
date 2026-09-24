/* Lösning till Uppgift 5. Av Jingye Chen, 2026 */
"use strict";

let vegetables = ["Broccoli", "Gurka", "Svamp", "Tomat", "Potatis"]

for(let i = 0; i < vegetables.length; i++){
    console.log(vegetables[i]);
}

console.log(`Första grönsaker ${vegetables[0]}`);
console.log(`Sista grönsaker ${vegetables[vegetables.length - 1]}`);

vegetables.push("paprika")
vegetables.shift()

for(let i = 0; i < vegetables.length; i++){
    console.log(vegetables[i]);
}