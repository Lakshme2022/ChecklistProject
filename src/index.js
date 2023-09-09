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