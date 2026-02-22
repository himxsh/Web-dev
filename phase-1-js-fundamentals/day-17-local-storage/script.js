const button = document.getElementById("increase-btn");
const para = document.getElementById("score-display");
let currentScore = 0;
button.addEventListener("click", () => {
    currentScore++;
    para.innerText = `Score: ${currentScore}`;
    localStorage.setItem("Score", JSON.stringify(currentScore));
})
if (localStorage.getItem("Score") != null) {
    num = localStorage.getItem("Score");
    currentScore = JSON.parse(num);
    para.innerText = `Score: ${currentScore}`;
}
else {
    currentScore = 0;
}