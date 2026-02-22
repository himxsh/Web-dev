// Day 11: Arrays — Part 1
const cart = ["apple", "banana", "cherry"];

const [item1, item2] = cart;

console.log(item1, item2);

cart.splice(1, 1, "mango");
const basket2 = ["watermelon", "grape"];
const finalCart = [...cart, ...basket2];
console.log(finalCart)