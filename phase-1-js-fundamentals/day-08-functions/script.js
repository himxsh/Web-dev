
const add = (num1, num2) => num1 + num2;
const substract = (num1, num2) => num1 - num2;
const calculateTotal = (price, taxRate = 0.08, discount = 0) => price + (price * taxRate) - discount;

const answer = calculateTotal(100);

console.log(answer);