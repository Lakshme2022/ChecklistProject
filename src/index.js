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

    const container = document.querySelector('.container')
    const arrKeyData = Object.keys(data)
    let count = 0
    createCards(data[arrKeyData[count]].title, data[arrKeyData[count]].question)


    function createQuestion(question) {
        const div = document.createElement('div')
        div.classList.add('item')
        const template = `
    <div class='wrapper-content'>
    <div class="question">${question}</div>
    <div class='range'>0</div>
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
        container.insertAdjacentHTML('beforeend', "<button class='nextCardsBtn' >SEND</button>")
    }

    container.addEventListener('click', (e) => {
        if (e.target.classList.contains('nextCardsBtn')) {
            saveObectLocalStorage()
            createNextCard()
        }
    })

    function createNextCard() {
        if (arrKeyData.length <= count) {
            return
        }
        count += 1
        createCards(data[arrKeyData[count]].title, data[arrKeyData[count]].question)
    }
}

//renderCards();


function result() {
    ///результат считать с локал сторедж
}

/*function range() {
    return '<div class="input indent">' +
        '<input type="range" min="1" max="5" class="slider" value="1">' +
        '<div class="numbers"><div>1</div><div>2</div><div>3</div><div>4</div><div>5</div>' +
        '</div>' +
        '</div>';
}


document.addEventListener("DOMContentLoaded", function (event) {
    content.innerHTML = range();
});*/