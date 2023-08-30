
const content = document.getElementById('content');

export function range() { //Добавила export, чтобы импортировать функцию в страницы с вопросами
    return '<div class="input indent">' +
        '<input type="range" min="1" max="5" class="slider" value="1">' +
        '<div class="numbers"><div>1</div><div>2</div><div>3</div><div>4</div><div>5</div>' +
        '</div>' +
        '</div>';
}

document.addEventListener("DOMContentLoaded", function (event) {
    content.innerHTML = range();
});