/*
 https://www.codewars.com/kata/535474308bb336c9980006f2
 Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.
*/

const greet = name => `Hello ${name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}`;

console.log(greet('tHadeu'));