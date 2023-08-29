const content = document.getElementById('contentBeginner');

//Импортируем функцию range() для использования в массиве объектов
import { range } from "../index.js";

//Массив объектов для страницы "Новичок"
const questions = [
    {
        question: 'Что такое TCP/IP, из каких уровней состоят и какие протоколы содержит. (В частности Ethernet, IP, TCP)',
        input: range()
    },
    {
        question: 'Что такое HTML. Базовые элементы разметки. Семантика SEO-оптимизация и доступность',
        input: range()
    },
    {
        question: 'Что такое CSS. Базовые свойства стилизации. Позиционирование элементов макета. Flexbox. Grid. Адаптивность посредством составления @‌media запросов. Псевдоэлементы и псевдоклассы. Методология БЭМ',
        input: range()
    },
    {
        question: 'Основы языка программирования JavaScript. Типы данных. Циклы, Условия, Работа с объектами. Функции. Прототипы и наследование. Работа с объектами. Методы массивов',
        input: range()
    },
    {
        question: 'Умеешь ли ты пользоваться программными средствами, аналогичными Slack, для организации коммуникации и совместной работы?',
        input: range()
    },
    {
        question: 'Имеешь ли ты практический опыт и навыки работы с инструментами, подобными Trello, для организации рабочих процессов и управления задачами?',
        input: range()
    }
]

//Импортируем функцию handleQuestions() для вывода на страницу массива объектов
import { handleQuestions } from "./handleQuestionsFunction.js";

//Отрисовываем страницу
document.addEventListener("DOMContentLoaded", function () {
    handleQuestions();
}
)