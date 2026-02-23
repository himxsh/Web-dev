let expenses = [];
let total = 0;
const displaytotal = document.getElementById("total-display");
const eform = document.getElementById("expense-form");
const ename = document.getElementById("expense-name");
const eamount = document.getElementById("expense-amount");
const el = document.getElementById("expense-list");
const submit = document.getElementById("submit");

eform.addEventListener("submit", (e) => {
    e.preventDefault();
    if (ename.value === "" || eamount.value === "") {
        alert("Please fill out both fields!");
        return;
    }
    else {
        let name = ename.value;
        let amount = JSON.parse(eamount.value);
        const newExpense = { name: name, amount: amount };
        expenses.push(newExpense);
        total = total + amount;
        console.log(name, amount)
        const newli = document.createElement("li");
        newli.innerText = `${name} - ${amount}`;
        el.append(newli);
        ename.value = "";
        eamount.value = "";
        displaytotal.innerText = `Total: ${total}`;
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }
})

if (localStorage.getItem("expenses") !== null) {
    let savedString = localStorage.getItem("expenses");
    expenses = JSON.parse(savedString);
}
expenses.forEach(element => {
    const newline = document.createElement("li");
    newline.innerText = `${element.name} - ${element.amount}`;
    el.append(newline);
    total = total + element.amount;
});
displaytotal.innerText = `Total: ${total}`;