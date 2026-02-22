let age = 16;
let hasBribe = true;
let isBlacklisted = true;

let canEnter = ((age >= 18) || (hasBribe == true)) && (!isBlacklisted);
console.log(canEnter)