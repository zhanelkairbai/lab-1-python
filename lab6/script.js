const target = document.querySelector("#target");
const scoreElement = document.querySelector("#score");
const restartButton = document.querySelector("#restart");
const gameArea = document.querySelector("#gameArea");

let score = 0;
const maxScore = 10;

function moveTarget() {
    const maxX = gameArea.clientWidth - target.offsetWidth;
    const maxY = gameArea.clientHeight - target.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    target.style.left = randomX + "px";
    target.style.top = randomY + "px";
}

target.addEventListener("click", function () {
    score++;

    scoreElement.textContent = score;

    if (score >= maxScore) {
        alert("Поздравляем! Вы поймали объект 10 раз!");
        target.style.display = "none";
        return;
    }

    moveTarget();
});

restartButton.addEventListener("click", function () {
    score = 0;
    scoreElement.textContent = score;

    target.style.display = "block";

    moveTarget();
});

moveTarget();
