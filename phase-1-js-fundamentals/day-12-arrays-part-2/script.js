const transactions = [150, -50, 20, -100, 300, -20];
const totalIncome = transactions.filter(price => price >= 0).reduce((total, price) => { return total + price }, 0);
console.log(totalIncome)