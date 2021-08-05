const dropDownArrows = document.querySelectorAll(".arrow");
const faqQuestions = document.querySelectorAll(".faq-question");
const faqAnswers = document.querySelectorAll(".faq-answer");

dropDownArrows.forEach((arrow, index) => {
    arrow.addEventListener('click', () => {
        arrow.classList.toggle("arrow-inverted");
        faqQuestions[index].classList.toggle("faq-question-bold");
        faqAnswers[index].classList.toggle("faq-answer-show");
    })
})


function toggleAnswerDisplay() {

}