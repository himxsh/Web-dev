// Day 15: DOM Manipulation — Part 2
const tasks = ["Buy groceries", "Walk the dog", "Learn the DOM", "Read a book"];
const todoList = document.getElementById("todo-list");
tasks.forEach((element) => {
    const newelement = document.createElement("li");
    newelement.innerText = element;
    newelement.classList.add("todo-item");
    todoList.append(newelement);
});

const firstTask = document.querySelector("li");

firstTask.remove();