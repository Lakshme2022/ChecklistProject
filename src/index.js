
const content = document.getElementById('content');

function range() {
    return  '<div class="input indent">' +
        '<input type="range" min="1" max="5" class="slider" value="1">' +
        '<div class="numbers"><div>1</div><div>2</div><div>3</div><div>4</div><div>5</div>' +
        '</div>' +
        '</div>';
}

function saveToStorage(data) {
    window.localStorage.setItem('checklist_data', JSON.stringify(data));
}

function loadFromStorage() {
    const points = window.localStorage.getItem('checklist_data')
    if (points) {
        return JSON.parse(points)
    }
    return {
        "beginner": [1, 1, 1, 1, 1, 1
        ],
        "trainee": [1, 1, 1, 1, 1, 1, 1, 1, 1
        ],
        "junior": [1, 1, 1, 1, 1
        ]
    };
}

function getAllPoints() {
    const a = Array.from( document.getElementsByClassName('slider'));
    return a.map((e) => Number(e.value));
}

document.addEventListener("DOMContentLoaded", function (event) {
    content.innerHTML = range();
});