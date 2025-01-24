// header 날짜 업데이트
function updateDate() {
    let now = new Date();
    const nowYear = String(now.getFullYear());
    const nowMonth = String(now.getMonth() + 1);
    const nowDay = String(now.getDate());

    let todayDate = `${nowYear}년 ${nowMonth}월 ${nowDay}일`;

    document.getElementsByClassName('today-date')[0].textContent = todayDate;
}
updateDate();

// 할 일 리스트 만들기
let Lists = [];

// 할 일 입력
function addList() {
    const addList = document.getElementById('add-todo-list')
    const addDate = document.getElementById('add-todo-date')

    const list = addList.value
    const dueDate = addDate.value

    if (!list || !dueDate) {
        alert('모두 입력해주세요.')
        return;
        };

    const newList = {list: list, dueDate: dueDate };

    Lists.push(newList);

    addList.value = ''
    addDate.value = ''

    const todayListDiv = document.getElementById('today-list')
    const tomorrowListDiv = document.getElementById('tomorrow-list')
    const laterListDiv = document.getElementById('later-list')

    const todoList = document.createElement('div');
    todoList.classList.add('todo-list');
    todoList.textContent = newList.list;

     if (newList.dueDate === 'today') {
        todayListDiv.appendChild(todoList);
    } else if (newList.dueDate === 'tomorrow') {
        tomorrowListDiv.appendChild(todoList);
    } else if (newList.dueDate === 'later') {
        laterListDiv.appendChild(todoList);
    }

    // updateList()
}

function updateList() {
    const todayListDiv = document.getElementById('today-list')
    const tomorrowListDiv = document.getElementById('tomorrow-list')
    const laterListDiv = document.getElementById('later-list')

    // todayListDiv.innerHTML = '';
    // tomorrowListDiv.innerHTML = '';
    // laterListDiv.innerHTML = '';

    todayLists.forEach(item => {
        const todoList = document.createElement('div');
        todoList.innerHTML = `
             <div class="todo-list">${item.list}</div>`;
        todayListDiv.appendChild(todoList);
          });

    tomorrowLists.forEach(item => {
        const todoList = document.createElement('div');
        todoList.innerHTML = `
                <div class="todo-list">${item.list}</div>`;
        tomorrowListDiv.appendChild(todoList);
        });
    
    laterLists.forEach(item => {
        const todoList = document.createElement('div');
        todoList.innerHTML = `
                <div class="todo-list">${item.list}</div>`;
        laterListDiv.appendChild(todoList);
            });
}

const todoList = document.getElementsByClassName('todo-list');

// todoList.addEventListener('click', function() {
//     todoList.classList.toggle('done');
// });

// HTMLCollection을 배열로 변환한 후, forEach로 순회하며 이벤트를 추가할 수 있습니다.
// Array.from(todoList).forEach(function(item) {
//     item.addEventListener('click', function() {
//         item.classList.toggle('done');
//     });
// });

document.getElementById('today-list').addEventListener('click', function(event) {
    if (event.target.classList.contains('todo-list')) {
        event.target.classList.toggle('done');
    }
});

document.getElementById('tomorrow-list').addEventListener('click', function(event) {
    if (event.target.classList.contains('todo-list')) {
        event.target.classList.toggle('done');
    }
});

document.getElementById('later-list').addEventListener('click', function(event) {
    if (event.target.classList.contains('todo-list')) {
        event.target.classList.toggle('done');
    }
});

