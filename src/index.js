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

//Отправка данных в локал сторедж введенных пользователем
const glObj = {
    userName: null,
    groupNum: null,
}

function getDataUser() {
    const inpName = document.querySelector('.inputName');
    const inpGroup = document.querySelector('.inputGroup');
    glObj.userName = inpName.value;
    glObj.groupNum = inpGroup.value;
}

//Вызов функции первой страницы
createFirstPage();

const firstButton = document.querySelector('#firstButton');

//Подслушка на кнопку, вызов второй страницы и сохранение внесенных пользователем данных 
firstButton.addEventListener('click', () => {
    getDataUser()
    renderCards()
})

//Слайдер из страниц (вопросы + бегунки + кнопки) - КОД ОСТАЛЬНЫХ УЧАСТНИЦ ПРОЕКТА
// Код (Егора) основной 

function renderCards() {
    const container = document.querySelector('.container');
    const arrKeyData = Object.keys(data);
    let count = 0;
    createCards(data[arrKeyData[count]].title, data[arrKeyData[count]].question)


    function createQuestion(question) {
        const div = document.createElement('div')
        div.classList.add('item')
        const template = `
    <div class='wrapper-content'>
    <div class="question">${question}</div>
    <div class='range'>${range()}</div>
    </div>
    
    `
        div.insertAdjacentHTML('beforeend', template)
        return div
    }

    function createCards(title, arrQuestion) {
        container.innerHTML = ''
        const createDivContainerCard = document.querySelector('div')
        createDivContainerCard.insertAdjacentHTML('beforeend', `<h2>${title}</h2>`)
        arrQuestion.forEach(item => {
            const divQuestion = createQuestion(item)
            container.appendChild(divQuestion)
        })
        container.insertAdjacentHTML('beforeend', `
        <div class="cardButtons">
            <button id=${title} class='prevCardsBtn' >Назад</button>
            <button id=${title} class='nextCardsBtn' >Вперед</button>
        </div>`)
    }

container.addEventListener('click', (e) => {
    const {id} = event.target
    if (e.target.classList.contains('nextCardsBtn')) {
        saveObectLocalStorage(id)
        createNextCard()
    } else if (e.target.classList.contains('prevCardsBtn')) {
        saveObectLocalStorage(id)
        goBackToPrevCard();
    }
})

// Сохранение в локал сторедж
function saveObectLocalStorage(title) {
    createFirstPage();
    const setOfQuestions = data[arrKeyData[count]].question;
    const currentRangeValues = Array.from(container.querySelectorAll('.slider')).map(input => input.value);

    const userData = {
        setOfQuestions,
        currentRangeValues
    };
    glObj[title] = userData;

    localStorage.setItem('userData', JSON.stringify(glObj));
    console.log (glObj);
}



function createNextCard() {
    if (arrKeyData.length - 1 <= count) {
        return
    }
    count += 1
    createCards(data[arrKeyData[count]].title, data[arrKeyData[count]].question)
}

function goBackToPrevCard() {
    if (count <= 0) {
        return;
    }
    count -= 1;
    createCards(data[arrKeyData[count]].title, data[arrKeyData[count]].question)
}


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