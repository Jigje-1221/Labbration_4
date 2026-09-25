/* Lösning till Uppgift 9. Av Jingye Chen, 2026 */
"use strict";

const people =[
    {
        name: "Jingye",
        age: 20,
        city: "Stockholm",
    },
    {
        name: "Markus",
        age: 43,
        city: "Uppsala",
    },
    {
        name: "Lucas",
        age: 14,
        city: "Östersund",
    }
];

function ageChecker (people){
    for(let i = 0; i < people.length; i++){
        if(people[i].age < 18){
            console.log(`${people[i].name} bor i ${people[i].city} och är inte myndig`)
        }
        else{
            console.log(`${people[i].name} bor i ${people[i].city} och är myndig`)
        }
    }
}

ageChecker(people);