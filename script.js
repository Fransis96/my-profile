// script.js
const colors = ["red", "gold", "green", "blue", "purple"];
let currentIndex = 0;

function changeColor() {
    const changingColorText = document.querySelector(".content h1");
    if (changingColorText) {
        changingColorText.style.color = colors[currentIndex];
        currentIndex = (currentIndex + 1) % colors.length;
    }
}
setInterval(changeColor, 900);