const question = document.querySelector(".question")
const answerText = document.querySelector(".answer__text")
const answer = document.querySelector(".answer")
const answerUser = prompt("Kdo má vždycky pravdu?")

question.textContent = "Kdo má vždycky pravdu?"
answerText.textContent = answerUser

if (answerUser == "Lenka") {
    answer.classList.add("answer--correct")
} else {
    answer.classList.add("answer--wrong")
}