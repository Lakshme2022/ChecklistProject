//Функция для вывода всех вопросов и бегунков на страницу
export function handleQuestions() {

    for (const question of questions) {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const questionText = document.createElement('p');
        questionText.textContent = question.question;
        questionDiv.appendChild(questionText);

        questionDiv.innerHTML += question.input;

        content.appendChild(questionDiv);
    }
}