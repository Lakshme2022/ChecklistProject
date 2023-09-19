// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"boCh":[function(require,module,exports) {
module.exports = {
  "beginner": {
    "title": "Первый уровень: Beginner (Новичок)",
    "question": ["Что такое TCP/IP, из каких уровней состоят и какие протоколы содержит. (В частности Ethernet, IP, TCP)", "Что такое HTML. Базовые элементы разметки. Семантика SEO-оптимизация и доступность", "Что такое CSS. Базовые свойства стилизации. Позиционирование элементов макета. Flexbox. Grid. Адаптивность посредством составления @media запросов. Псевдоэлементы и псевдоклассы. Методология БЭМ", "Основы языка программирования JavaScript. Типы данных. Циклы, Условия, Работа с объектами. Функции. Прототипы и наследование. Работа с объектами. Методы массивов", "Умеешь ли ты пользоваться программными средствами, аналогичными Slack, для организации коммуникации и совместной работы", "Имеешь ли ты практический опыт и навыки работы с инструментами, подобными Trello, для организации рабочих процессов и управления задачами"],
    "suggestion": ["<a href='https://itgirlschool.notion.site/19-API-f022a1d855f84556822792ae865ccc01' target='_blank'>Неделя 19. Асинхронность и работа с API</a>", "<a href='https://itgirlschool.notion.site/1-HTML-db0c955498d94cef9962f9734c5b0ed2' target='_blank'>Неделя 1. Основы HTML.</a> <a href='https://itgirlschool.notion.site/2-c980fca3150f4b7890748c6cad913114' target='_blank'>Неделя 2. Семантическая вёрстка и разметка</a>", "<a href='https://itgirlschool.notion.site/4-CSS-44e1f287a10e4e9793c48ef83f0e60b9' target='_blank'>Неделя 4. Стилизация и CSS-свойства.</a> <a href='https://itgirlschool.notion.site/5-4ef98d6af6664eae8dfeaa9da51076ba' target='_blank'>Неделя 5. Позиционирование элементов.</a> <a href='https://itgirlschool.notion.site/6-CSS-Grid-9d2ab375ed5e4f0a828631427dcdd6d4' target='_blank'>Неделя 6. CSS Grid.</a> <a href='https://itgirlschool.notion.site/7-d538acf66018487ea0b5b12167679fc9' target='_blank'>Неделя 7. Адаптивность верстка.</a> <a href='https://www.youtube.com/watch?v=tbj4gvq7dHY' target='_blank'>Методология БЭМ</a>", "<a href='https://itgirlschool.notion.site/9-JavaScript-0eb849b1efbc46af934b541b107451f5' target='_blank'>Неделя 9. Знакомство с JavaScript.</a> <a href='https://itgirlschool.notion.site/10-88692713b2924009bf8b5e2b82a5c175' target='_blank'>Неделя 10. Функции.</a> <a href='https://itgirlschool.notion.site/14-4b65e02f71c7413783798409499f834c' target='_blank'>Неделя 14. Массивы.</a> <a href='https://itgirlschool.notion.site/15-a205da7b5d7c40fca503b00bd7be0602' target='_blank'>Неделя 15. Циклы.</a> <a href='https://itgirlschool.notion.site/17-f8b2f0ebcd794c2ca7de152460bf94ef' target='_blank'>Неделя 17. Объекты и классы</a>", "<a href='https://itgirlschool.notion.site/1-HTML-db0c955498d94cef9962f9734c5b0ed2' target='_blank'>Неделя 1. Основы HTML. Обзор инструментов</a>", "<a href='https://www.youtube.com/watch?v=qDGTiwonZJE' target='_blank'>Недели 9-10. Командная работа по Agile</a>"]
  },
  "trainee": {
    "title": "Второй уровень: Trainee (Стажёр)",
    "question": ["Умеешь работать с браузерным окружением и DOM (Document Object Model). Браузерные события. Обработка ошибок (Try/Catch). Пользовательские ошибки. Модульная система. Экспорт и импорт. Web API", "Что делает JavaScript — асинхронным. Промисы. Fetch API. Синтаксический сахар — Async и Await", "Cross-Origin Resource Sharing (CORS). Request & Response Headers (это была тема для самостоятельного изучения)", "Что такое линтеры. Pre-commit Check", "Как работает система управления версиями (Git). Регистрация на GitHub. Коммиты. Репозитории. Merge Requests. Checkout. Ветки", "Что такое Node.js. Как работает менеджер пакетов Npm. package.json и package-lock.json. npm install, npm uninstall", "Что такое препроцессор. SASS и SCSS. Переменные. Импорты. Вложенность. Модули. Миксины", "Обладаешь ли ты навыками работы с редактором Figma или аналогичными инструментами в сфере дизайна или прототипирования", "Каков уровень вашего знакомства и опыта использования фреймворка Bootstrap и других подобных для разработки веб-интерфейсов"],
    "suggestion": ["<a href='https://itgirlschool.notion.site/11-DOM-15fa90dcbc574814bf6cec66a18f7ddd' target='_blank'>Неделя 11. Знакомство с DOM.</a> <a href='https://itgirlschool.notion.site/20-Node-js-npm-9bf799eb0f77485a8ef7841a61b3b60c' target='_blank'>Неделя 20. Обработка ошибок. Node.js и npm.</a> <a href='https://itgirlschool.notion.site/19-API-f022a1d855f84556822792ae865ccc01' target='_blank'>Неделя 19. Асинхронность и работа с API</a>", "<a href='https://itgirlschool.notion.site/19-API-f022a1d855f84556822792ae865ccc01' target='_blank'>Неделя 19. Асинхронность и работа с API</a>", "Cross-Origin Resource Sharing (CORS). Request & Response Headers (это была тема для самостоятельного изучения)", "Что такое линтеры. Pre-commit Check (это была тема для самостоятельного изучения)", "Неделя 10. Командная работа в одной ветке Git (это был вебинар с наставницей)", "<a href='https://itgirlschool.notion.site/20-Node-js-npm-9bf799eb0f77485a8ef7841a61b3b60c' target='_blank'>Неделя 20. Обработка ошибок. Node.js и npm</a>", "<a href='https://itgirlschool.notion.site/7-d538acf66018487ea0b5b12167679fc9' target='_blank'>Неделя 7. Адаптивная вёрстка. Препроцессоры</a>", "<a href='https://itgirlschool.notion.site/3-41c44a7f3b684a09bc4a26030e87eed5' target='_blank'>Неделя 3. Графика. Figma</a>", "<a href='https://itgirlschool.notion.site/8-CSS-29091cbc3bd4481fb9b06e09f369783e' target='_blank'>Неделя 8. СSS Фреймворки</a>"]
  },
  "junior": {
    "title": "Третий уровень: Junior (Младший разработчик)",
    "question": ["Что такое сборщик модулей. Babel. Настройка Webpack. Правила. Модули. Плагины. DevServer. Переход к Vite", "Что такое React и какие проблемы он решает. Жизненный цикл компонентов. Особенности виртуального DOM-дерева. React компоненты. Базовые хуки. React Refs. JSX синтаксис. Props & State", "Особенности FLUX архитектуры. Reducers. Actions. Хук useContext. Redux и Redux Toolkit. Redux Thunk. RTK Query. (По желанию можно изучить MobX и/или Zustand)", "Что такое роут. Из чего состоит объект Location. Библиотека React Router", "Как повысить эффективность стилизации. Что такое UI библиотека. MaterialUI"],
    "suggestion": ["Что такое сборщик модулей. Babel. Настройка Webpack. Правила. Модули. Плагины. DevServer. Переход к Vite (это был вебинар с наставницей)", "<a href='https://itgirlschool.notion.site/21-React-e44288ea389a4c3cb7bb2d6a1658fbc0' target='_blank'>Неделя 21. Введение в React.</a> <a href='https://itgirlschool.notion.site/22-c559af92ea8b468f9eb3ca6f01495b5b' target='_blank'>Неделя 22. Компоненты.</a> <a href='https://itgirlschool.notion.site/23-CSS-React-d4b0b61bb697459aacb1681ba2764440' target='_blank'>Неделя 23. CSS в React.</a> <a href='https://itgirlschool.notion.site/24-Props-State-e85c9dbc72b8400484b7fa8dbcef3b79' target='_blank'>Неделя 24. Props & State.</a> <a href='https://itgirlschool.notion.site/25-e45f5c4b3f7f4c0aa1097fdc36df362c' target='_blank'>Неделя 25. Жизненный цикл компонента</a>", "<a href='https://itgirlschool.notion.site/29-Context-26ce7fd605f342adb66195ecebb18e86' target='_blank'>Неделя 29. Context</a> + Библиотеки (это была тема для самостоятельного изучения)", "<a href='https://itgirlschool.notion.site/26-f67d3134cbf54844831a5d899db00b36' target='_blank'>Неделя 26. Роутинг.</a>", "Как повысить эффективность стилизации. Что такое UI библиотека. MaterialUI (это была тема для самостоятельного изучения)"]
  }
};
},{}],"zbzq":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";

var _data = _interopRequireDefault(require("./data.json"));
require("./style.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var global_title = '';
var count = 0;
var container = document.querySelector('.container');
var arrKeyData = Object.keys(_data.default);
function createFirstPage() {
  //Отрисовка первой страницы
  global_title = 'first';
  var content = document.getElementById('content');
  content.innerHTML = '';
  var formHTML = "\n            <div class=\"indent\">\u041C\u044B \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u043B\u0438 \u0447\u0435\u043A-\u043B\u0438\u0441\u0442, \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u0442\u044B \u0441\u043C\u043E\u0436\u0435\u0448\u044C \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u0441\u0432\u043E\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0437\u043D\u0430\u043D\u0438\u0439 \u0438 \u0433\u043E\u0442\u043E\u0432\u043D\u043E\u0441\u0442\u044C \u0441\u0442\u0430\u0442\u044C\n                Junior Frontend \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u0446\u0435\u0439</div>\n            <div class=\"pinkText indent\">\u041E\u0446\u0435\u043D\u0438 \u0441\u0432\u043E\u0438 Hard Skills \u043F\u043E 5 \u0431\u0430\u043B\u044C\u043D\u043E\u0439 \u0448\u043A\u0430\u043B\u0435, \u0433\u0434\u0435 5 - \u0437\u043D\u0430\u044E \u043E\u0442\u043B\u0438\u0447\u043D\u043E, \u0430 1 - \u043D\u0435 \u0437\u043D\u0430\u044E \u043D\u0438\u0447\u0435\u0433\u043E</div>\n\n        <div class=\"form indent\">\n            <input class=\"inputField inputName\" type=\"text\" placeholder=\"\u0422\u0432\u043E\u0435 \u0438\u043C\u044F \u0438 \u0444\u0430\u043C\u0438\u043B\u0438\u044F\" >\n            <input class=\"inputField inputGroup\" type=\"text\" placeholder=\"\u0422\u0432\u043E\u044F \u0433\u0440\u0443\u043F\u043F\u0430\" >\n        </div>\n        <div class=\"btnField indent\">\n            <button id=\"firstButton\">\u041D\u0430\u0447\u0430\u0442\u044C</button>\n        </div>";
  content.insertAdjacentHTML('beforeend', formHTML);
  var firstButton = document.querySelector('#firstButton');

  // Подслушка на кнопку, вызов второй страницы и сохранение внесенных пользователем данных
  firstButton.addEventListener('click', function () {
    if (checkEmpty()) {
      setDataUser();
      count = 0;
      renderCards();
    }
  });
}

//Проверка заполнения инпутов + Uppercase для первой буквы имени
function checkEmpty() {
  var name = document.querySelector('.inputName');
  var group = document.querySelector('.inputGroup');
  if (name.value === '' || group.value === '') {
    if (!document.querySelector('#alert_div')) {
      var alert = document.createElement('div');
      alert.id = 'alert_div';
      var btnField = document.querySelector('.btnField');
      alert.innerHTML = '<h3 class="center pinkText">* Необходимо заполнить все поля</h3>';
      btnField.before(alert);
    }
    return false;
  } else {
    //Капиталайз имени
    name.value = name.value[0].toUpperCase() + name.value.substring(1).toLowerCase();
  }
  return true;
}

//Отправка данных в локал сторедж введенных пользователем
var glObj = {
  userName: null,
  groupNum: null
};
function setDataUser() {
  var inpName = document.querySelector('.inputName');
  var inpGroup = document.querySelector('.inputGroup');
  glObj.userName = inpName.value;
  glObj.groupNum = inpGroup.value;
}
function createCards(title, arrQuestion, section_key) {
  global_title = section_key;
  container.innerHTML = '';
  var createDivContainerCard = document.querySelector('div');
  createDivContainerCard.insertAdjacentHTML('beforeend', "<h2 class=\"indent pinkText\">".concat(title, "</h2>"));
  arrQuestion.forEach(function (item) {
    var divQuestion = createQuestion(item);
    container.appendChild(divQuestion);
  });
  container.insertAdjacentHTML('beforeend', "\n        <div class=\"cardButtons\">\n            <button class='prevCardsBtn' >\u041D\u0430\u0437\u0430\u0434</button>\n            <button class='nextCardsBtn' >\u0412\u043F\u0435\u0440\u0435\u0434</button>\n        </div>");
}
function range() {
  return '<div class="input indent">' + '<input type="range" min="1" max="5" class="slider" value="1">' + '<div class="numbers"><div>1</div><div>2</div><div>3</div><div>4</div><div>5</div>' + '</div>' + '</div>';
}
function createQuestion(question) {
  var div = document.createElement('div');
  div.classList.add('item');
  var template = "\n                    <div class=\"wrapperContent\">\n                    <div class=\"question indent\">".concat(question, "</div>\n                    <div class=\"range indent\">").concat(range(), "</div>\n                    </div>");
  div.insertAdjacentHTML('beforeend', template);
  return div;
}

//Слайдер из страниц (вопросы + бегунки + кнопки)
function renderCards() {
  var arrKeyData = Object.keys(_data.default);
  createCards(_data.default[arrKeyData[count]].title, _data.default[arrKeyData[count]].question, arrKeyData[count]);
}
container.addEventListener('click', function (e) {
  if (e.target.classList.contains('nextCardsBtn')) {
    saveObjectLocalStorage(global_title);
    createNextCard();
  } else if (e.target.classList.contains('prevCardsBtn')) {
    saveObjectLocalStorage(global_title);
    createPrevCard();
  }
});
function createNextCard() {
  if (count + 1 === arrKeyData.length) {
    createLastPage();
  } else {
    count += 1;
    createCards(_data.default[arrKeyData[count]].title, _data.default[arrKeyData[count]].question, arrKeyData[count]);
  }
}
function createPrevCard() {
  if (count === 0) {
    createFirstPage();
  } else {
    count -= 1;
    createCards(_data.default[arrKeyData[count]].title, _data.default[arrKeyData[count]].question, arrKeyData[count]);
  }
}

// Сохранение в локал сторедж
function saveObjectLocalStorage(title) {
  var setOfQuestions = _data.default[arrKeyData[count]].question;
  var currentRangeValues = Array.from(container.querySelectorAll('.slider')).map(function (input) {
    return input.value;
  });
  var userData = {
    setOfQuestions: setOfQuestions,
    currentRangeValues: currentRangeValues
  };
  glObj[title] = userData;
  localStorage.setItem('userData', JSON.stringify(glObj));
}

//создание последней страницы
function createLastPage() {
  //получение всех ключей объекта
  var arrKeyData = Object.keys(JSON.parse(localStorage.getItem('userData')));
  //удаление ключей, которые не нужны для расчета
  var newArrKeyData = arrKeyData.filter(function (e) {
    return e !== 'userName' && e !== 'groupNum';
  });
  //подсчет суммы результатов
  var result = 0;
  var answer = JSON.parse(localStorage.getItem('userData'));
  newArrKeyData.forEach(function (item) {
    var resultAnswer = answer[item].currentRangeValues;
    var res = resultAnswer.reduce(function (a, b) {
      return Number(a) + Number(b);
    });
    result += res;
  });

  //перевод результата в проценты
  var percentResult = result * 100 / 100;
  //определение уровня
  function level() {
    if (percentResult <= 59) {
      return "\"Новичок\"";
    } else if (percentResult >= 60 && percentResult < 80) {
      return "\"Стажёр\"";
    } else {
      return "\"Младший разработчик\"";
    }
  }
  // рекомендации по результату 
  function conclusion() {
    if (percentResult <= 59) {
      return "<h2>\u0422\u044B \u043C\u043E\u0436\u0435\u0448\u044C \u0441\u043C\u0435\u043B\u043E \u0438\u0441\u043A\u0430\u0442\u044C \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043F\u043E \u0441\u0442\u0430\u0436\u0438\u0440\u043E\u0432\u043A\u0435, \u043D\u043E \u043F\u043E\u0432\u0442\u043E\u0440\u0438 \u043F\u0435\u0440\u0435\u0434 \u044D\u0442\u0438\u043C \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0442\u0435\u043C\u044B, \u043D\u0430\u0445\u043E\u0434\u044F\u0449\u0438\u0435\u0441\u044F \u043F\u043E \u0441\u0441\u044B\u043B\u043A\u0430\u043C \u043D\u0438\u0436\u0435:</h2>";
    } else if (percentResult >= 60 && percentResult < 80) {
      return "<h2>\u041F\u0435\u0440\u0435\u0434 \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435\u043C \u0440\u0435\u0437\u044E\u043C\u0435 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u044E \u0441\u0445\u043E\u0434\u0438\u0442\u044C \u043F\u043E \u043D\u0438\u0436\u0435\u043F\u0440\u0438\u0432\u0435\u0434\u0435\u043D\u043D\u044B\u043C \u0441\u0441\u044B\u043B\u043A\u0430\u043C \u0438 \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C \u0442\u0435\u043C\u044B:</h2>";
    } else {
      return "<h2 class=\"pinkText\">\u041C\u043E\u0436\u0435\u0448\u044C \u043F\u0440\u0438\u0441\u0442\u0443\u043F\u0430\u0442\u044C \u043A \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0435 \u043A \u0441\u043E\u0431\u0435\u0441\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044E!</h2>" + "<iframe src=\"https://www.youtube.com/embed/cyfaOAH-CF0\"></iframe>";
    }
  }
  //отрисовка последней страницы
  var content = document.getElementById('content');
  content.innerHTML = "<h2 class=\"pinkText\">\u041E\u0442\u043B\u0438\u0447\u043D\u0430\u044F \u0440\u0430\u0431\u043E\u0442\u0430, \u043F\u043E\u0437\u0434\u0440\u0430\u0432\u043B\u044F\u044E!</h2>" + "<div class=\"grid\"><h3>\u0422\u0432\u043E\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442:</h3><h3 class=\"pinkText\">".concat(percentResult, "%</h3></div>") + "<div class=\"grid\"><h3>\u0447\u0442\u043E \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0432\u0442\u0432\u0443\u0435\u0442 \u0443\u0440\u043E\u0432\u043D\u044E:</h3><h3 class=\"pinkText\">" + level() + "</h3></div>" + "<div>" + conclusion() + "</div>";

  //создание кнопки для перехода в начало
  var btnStart = document.createElement('button');
  btnStart.textContent = "В начало";
  content.append(btnStart);

  //переход на первую страницу    
  btnStart.addEventListener('click', function (e) {
    content.innerHTML = '';
    createFirstPage();
    btnStart.style.display = "none";
  });
  if (percentResult >= 80) return '';
  // генерация рекомендаций, если ответ на вопрос был <=3
  newArrKeyData.forEach(function (key, index) {
    console.log(key);
    var resultAnswers = answer[key].currentRangeValues;
    resultAnswers.forEach(function (score, i) {
      console.log(i);
      if (score <= 3) {
        console.log(score);
        console.log(_data.default[key]['suggestion'][i]);
        btnStart.insertAdjacentHTML('beforebegin', "<h3 class=\"pinkTekst\">".concat(_data.default[key]['suggestion'][i], "</h3>"));
      }
    });
  });
}
document.addEventListener("DOMContentLoaded", function () {
  //Вызов функции первой страницы
  createFirstPage();
});
},{"./data.json":"boCh","./style.scss":"zbzq"}]},{},["Focm"], null)
//# sourceMappingURL=/src.02d30289.js.map