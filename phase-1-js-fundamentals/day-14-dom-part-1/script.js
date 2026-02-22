const mainTitle = document.getElementById("main-title");
const descriptions = document.querySelectorAll(".description");
const secret = document.querySelector("#secret-message");
mainTitle.innerText = "DOM manipulation is awesome."

mainTitle.style.backgroundColor = "red";
descriptions.forEach(paragraph => paragraph.innerText = "I was changed by Javascript");

secret.classList.add("highlight");