import data from './data.json'


function createFirstPage() {
    const content = document.getElementById('content');
    const formHTML = `
            <p>Мы подготовили чек-лист, с помощью которого ты сможешь определить свой уровень знаний и готовность стать
                Junior Frontend разработчицей</p>
            <p class="pinkText">Оцени свои Hard Skills по 5 бальной шкале, где 5 - знаю отлично, а 1 - не знаю ничего</p>
    <form>
        <div class="form">
            <input class="inputField" type="text" placeholder="Твое имя">
            <input class="inputField" type="text" placeholder="Твоя группа">
        </div>
        <div class="btnField">
            <button id="firstButton">Начать</button>
        </div>
    </form>`;
    content.insertAdjacentHTML('beforeend', formHTML);
    const form = content.querySelector('form');
    return form
}

createFirstPage();

const firstButton = document.querySelector('#firstButton');

firstButton.addEventListener('click', renderCards)

function renderCards() {

    //КОД ОСТАЛЬНЫХ УЧАСТНИЦ ПРОЕКТА - слайдер из страниц с вопросами 

    //Катин код
    function range() {
        return '<div class="input indent">' +
            '<input type="range" min="1" max="5" class="slider" value="1">' +
            '<div class="numbers"><div>1</div><div>2</div><div>3</div><div>4</div><div>5</div>' +
            '</div>' +
            '</div>';
    }


    document.addEventListener("DOMContentLoaded", function (event) {
        content.innerHTML = range();
    });

}