import data from './data.json'

//Отрисовка первой страницы
function createFirstPage() {
    const content = document.getElementById('content');
    const formHTML = `
            <p>Мы подготовили чек-лист, с помощью которого ты сможешь определить свой уровень знаний и готовность стать
                Junior Frontend разработчицей</p>
            <p class="pinkText">Оцени свои Hard Skills по 5 бальной шкале, где 5 - знаю отлично, а 1 - не знаю ничего</p>
        <div class="form">
            <input class="inputField inputName" type="text" placeholder="Твое имя">
            <input class="inputField inputGroup" type="text" placeholder="Твоя группа">
        </div>
        <div class="btnField">
            <button id="firstButton">Начать</button>
        </div>`;
    content.insertAdjacentHTML('beforeend', formHTML);
    const form = content.querySelector('form');
    return form
}
//Проверка заполнения инпутов + Uppercase для первой буквы имени
const name = document.querySelector('.inputName');
const group = document.querySelector('.inputGroup');
function checkEmpty() {
    if (name == '' || group == '') {
        alert('Необходимо заполнить все поля')
    }
}
function getUserName() {
    const newName = name.value[0].toUpperCase() + name.value.substring(1).toLowerCase();
    console.log(newName);
    name.value = '';
}
function getUserGroup() {
    group.value = '';
}

// }
// button.addEventListener('click', getComment);
//Отправка данных в локал сторедж введенных пользователем
function getDataUser() {
    const inpName = document.querySelector('.inputName');
    const inpGroup = document.querySelector('.inputGroup');

    const obj = {
        inpName: inpName.value, inpGroup: inpGroup.value
    }
    localStorage.setItem('dataUser', JSON.stringify(obj))
}

//Вызов функции первой страницы
createFirstPage();

const firstButton = document.querySelector('#firstButton');

//Подслушка на кнопку, вызов второй страницы и сохранение внесенных пользователем данных 
firstButton.addEventListener('click', () => {
    checkEmpty()
    getUserName()
    getUserGroup()
    getDataUser()
    renderCards()
})

//Слайдер из страниц (вопросы + бегунки + кнопки) - КОД ОСТАЛЬНЫХ УЧАСТНИЦ ПРОЕКТА
function renderCards() {







    //Катин код внесла в функцию следующих страниц
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