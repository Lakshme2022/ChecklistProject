import data from './data.json'

let global_title = '' // ?: для именования ключей в localStorage

function createFirstPage() {
    //Отрисовка первой страницы
    global_title = 'first';
    const content = document.getElementById('content');
    // ?: нужно "обнулить" содержимое, иначе при переходе назад код просто добавится
    content.innerHTML = ''
    const formHTML = `
            <div class="indent">Мы подготовили чек-лист, с помощью которого ты сможешь определить свой уровень знаний и готовность стать
                Junior Frontend разработчицей</div>
            <div class="pinkText indent">Оцени свои Hard Skills по 5 бальной шкале, где 5 - знаю отлично, а 1 - не знаю ничего</div>
        <div class="form indent">
            <input class="inputField inputName" type="text" placeholder="Твое имя">
            <input class="inputField inputGroup" type="text" placeholder="Твоя группа">
        </div>
        <div class="btnField indent">
            <button id="firstButton">Начать</button>
        </div>`;
    content.insertAdjacentHTML('beforeend', formHTML);
    const firstButton = document.querySelector('#firstButton');

    // Подслушка на кнопку, вызов второй страницы и сохранение внесенных пользователем данных
    firstButton.addEventListener('click', () => {
        console.log(1111)
        // getDataUser() ?: по смыслу тут set, не get
        setDataUser()
        renderCards()
    })
    // ?: результат функции не используется, в этих строчках нет смысла
    // const form = content.querySelector('form');
    // return form

}

//Отправка введенных пользователем данных в локал сторедж
const glObj = {
    userName: null,
    groupNum: null,
}
// ?: функция переименована с getDataUser
function setDataUser() {
    // TODO: Добавить валидацию
    const inpName = document.querySelector('.inputName');
    const inpGroup = document.querySelector('.inputGroup');
    glObj.userName = inpName.value;
    glObj.groupNum = inpGroup.value;
}


//Слайдер из страниц (вопросы + бегунки + кнопки)
function renderCards() {
    const container = document.querySelector('.container');
    const arrKeyData = Object.keys(data);
    let count = 0;
    createCards(data[arrKeyData[count]].title, data[arrKeyData[count]].question)

    function createQuestion(question) {
        const div = document.createElement('div')
        div.classList.add('item')
        const template = `
                    <div class="wrapperContent">
                    <div class="question indent">${question}</div>
                    <div class="range indent">${range()}</div>
                    </div>`
        div.insertAdjacentHTML('beforeend', template)
        return div
    }

    function createCards(title, arrQuestion) {
        global_title = title;
        container.innerHTML = ''
        const createDivContainerCard = document.querySelector('div')
        createDivContainerCard.insertAdjacentHTML('beforeend', `<h2 class="indent pinkText">${title}</h2>`)
        arrQuestion.forEach(item => {
            const divQuestion = createQuestion(item)
            container.appendChild(divQuestion)
        })

        container.insertAdjacentHTML('beforeend', `
        <div class="cardButtons">
            <button class='prevCardsBtn' >Назад</button>
            <button class='nextCardsBtn' >Вперед</button>
        </div>`)
    }

    function createNextCard() {
        if (count+1 === arrKeyData.length) {
            createLastPage()
        } else {
            count += 1
            createCards(data[arrKeyData[count]].title, data[arrKeyData[count]].question)
        }
    }

    function createPrevCard() {
        if ( count === 0) {
            createFirstPage()
        } else {
            count -= 1
            createCards(data[arrKeyData[count]].title, data[arrKeyData[count]].question)
        }
    }


    container.addEventListener('click', (e) => {
        const {id} = e.target;
        if (e.target.classList.contains('nextCardsBtn')) {
            saveObjectLocalStorage(global_title)
            createNextCard()
        } else if (e.target.classList.contains('prevCardsBtn')) {
            saveObjectLocalStorage(global_title)
            createPrevCard()
        }
    })


//Катин код внесла в функцию следующих страниц
    function range() {
        return '<div class="input indent">' +
            '<input type="range" min="1" max="5" class="slider" value="1">' +
            '<div class="numbers"><div>1</div><div>2</div><div>3</div><div>4</div><div>5</div>' +
            '</div>' +
            '</div>';
    }


// Сохранение в локал сторедж
    function saveObjectLocalStorage(title) {
        // ?: save должен делать только сохранение
        // createFirstPage();
        const arrKeyData = Object.keys(data);
        const setOfQuestions = data[arrKeyData[count]].question;
        const currentRangeValues = Array.from(container.querySelectorAll('.slider')).map(input => input.value);

        const userData = {
            setOfQuestions,
            currentRangeValues
        };
        glObj[title] = userData;

        localStorage.setItem('userData', JSON.stringify(glObj));

    }


}


//создание последней страницы
function createLastPage(){
    //получение всех ключей объекта
    const arrKeyData = Object.keys(JSON.parse(localStorage.getItem('userData')));
    //удаление ключей, которые не нужны для расчета
    const newArrKeyData=arrKeyData.filter(e=>e!='userName'&&e!='groupNum')
    //подсчет суммы результатов
    let result=0
    const answer = JSON.parse(localStorage.getItem('userData'));
    newArrKeyData.forEach(item=>{
        let resultAnswer=answer[item].currentRangeValues;
        let res=resultAnswer.reduce((a,b)=>a+b)
        result+=res;

    })
    //перевод результата в проценты
    const percentResult = result*100/100
    //отрисовка последней страницы
    const content = document.getElementById('content');
    content.innerHTML = ''
    content.innerHTML = '<h2 class = "pinkText">Отличная работа, поздравляю!</h2>'+
    '<div class="grid"><h3>Твой результат:</h3><h3 class = "pinkText">'+percentResult+'%</h3></div>'
    const divLevel = document.createElement('div')
    divLevel.classList.add("grid")
    content.append(divLevel)
    divLevel.insertAdjacentHTML('beforeend',`<h3>что соответсвтвует уровню: </h3>`)

    if (percentResult<=59){
        divLevel.insertAdjacentHTML('beforeend',`<h3 class = "pinkText">"Новичок"</h3>`)
        divLevel.insertAdjacentHTML('afterEnd',`<h2>Следует повторить:</h2>`)
    }
    else if (percentResult>=60 && percentResult<80){
        divLevel.insertAdjacentHTML('beforeend',`<h3 class = "pinkText">"Стажёр"</h3>`)
        divLevel.insertAdjacentHTML('afterEnd',`<h2>Ты можешь смело искать предложения по стажировке, но повтори перед этим следующие темы:</h2>`)
    }
    else{
        divLevel.insertAdjacentHTML('beforeend',`<h3 class = "pinkText">"Младший разработчик"</h3>`)
        divLevel.insertAdjacentHTML('afterEnd',`<h2>Можешь приступать к подготовке к собеседованию!</h2><div class="div_video"><button class="btn_video">Видео с собеседованием</button></div>`)
    }
    //создание кнопки для перехода в начало
    const btnStart = document.createElement('button')
    btnStart.textContent = "В начало"
    content.append(btnStart)

//переход на первую страницу и очистка локал сторедж
    btnStart.addEventListener('click',(e)=>{
        content.innerHTML = ''
        createFirstPage()
        window.localStorage.clear()
        btnStart.style.display='none'
    })
}

//переход на страницу с собеседованием
// content.addEventListener('click', (e)=>{
//     if(e.target.classList.contains('btn_video')){
//         location.href ="https://www.youtube.com/watch?v=t3h745eJOKU"
//     }
// })


document.addEventListener("DOMContentLoaded", function () {   //Вызов функции первой страницы
    createFirstPage()
});
