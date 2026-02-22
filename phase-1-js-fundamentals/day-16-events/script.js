const board = document.getElementById("color-board");

board.addEventListener("click", (e) => {
    if (e.target.tagName === 'BUTTON') {
        document.body.style.backgroundColor = e.target.innerText;
    }
})