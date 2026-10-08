const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
    question.addEventListener("click", function () {

        const currentAnswer = question.nextElementSibling;

        document.querySelectorAll(".answer").forEach(function (answer) {
            answer.classList.remove("active");
        });

        if (!currentAnswer.classList.contains("active")) {
            currentAnswer.classList.add("active");
        }
    });
});
