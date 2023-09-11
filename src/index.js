import data from './data.json'

//Отрисовка первой страницы
function createFirstPage() {
    const content = document.getElementById('content');
    const formHTML = `
            <p>Мы подготовили чек-лист, с помощью которого ты сможешь определить свой уровень знаний и готовность стать
                Junior Frontend разработчицей</p>
            <p class="pinkText">Оцени свои Hard Skills по 5 бальной шкале, где 5 - знаю отлично, а 1 - не знаю ничего</p>
        <div class="form">
            <input class="inputField inputName" type="text" placeholder="Твое имя" >
            <input class="inputField inputGroup" type="text" placeholder="Твоя группа" >
        </div>
        <div class="btnField">
        <div class="error"></div>
            <button id="firstButton">Начать</button>
        </div>`;
    content.insertAdjacentHTML('beforeend', formHTML);
    const form = content.querySelector('form');
    return form
}
//Проверка заполнения инпутов + Uppercase для первой буквы имени
function checkEmpty() {
    const name = document.querySelector('.inputName');
    const group = document.querySelector('.inputGroup');
    if (name.value === '' || group.value === '') {//предупреждение о незаполненных полях, если хотя бы одно из них не заполнено
        const div = document.createElement('div');
        document.querySelector('.error').textContent = "* Необходимо заполнить все поля";
    }
    // else if (name.value != "" && group.value != "") {//удаление предупреждения о незаполненых полях, если их заполнили 
    //     document.querySelector('.error').textContent = "";
    // } //!!!если эта часть кода активна, не работает часть "else" ниже!!!
    else { //Капиталайз имени
        name.value = name.value[0].toUpperCase() + name.value.substring(1).toLowerCase();
        console.log(name.value);
        console.log(group.value);
    }
}
// }
// button.addEventListener('click', getComment);
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
    checkEmpty()
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
    //перевод резельтата в проценты
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

    if (percentResult<60){
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
content.addEventListener('click', (e)=>{
    if(e.target.classList.contains('btn_video')){        
        location.href ="https://www.youtube.com/watch?v=t3h745eJOKU"
    }
})