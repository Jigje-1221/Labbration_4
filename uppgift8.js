/* Lösning till Uppgift 8. Av Jingye Chen, 2026 */
"use strict";

const book = {
    titel: "The Hobbit",
    author: "J.R.R. Tolkien",
    yearOfPublication: 1937
}

function bookInfo(book){
    console.log("Title: " + book.titel);
    console.log("Författare: " + book.author);
    console.log("utgivningsår: " + book.yearOfPublication);
}

bookInfo(book);