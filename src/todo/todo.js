const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container')
function addTask() {
    if (inputBox.value === '') return
    let randomNumber = Math.floor((Math.random() * 1000) + 1);
    let randomString = (Math.random() + 1).toString(36).substring(7);
    let id = `${randomNumber}-${randomString}`
    let li = document.createElement('li');
    li.className = 'task-item form-control form-control-sm mb-2'
    li.innerHTML = inputBox.value;
    li.id = `list_${id}`;
    listContainer.appendChild(li);

    let editButton = document.createElement('button')
    let deleteButton = document.createElement('button')

    editButton.textContent = 'Edit'
    editButton.className = 'btn btn-warning mx-2'
    editButton.id = `edit_${id}`

    deleteButton.textContent = 'Delete'
    deleteButton.className = 'btn btn-danger'
    deleteButton.id = `delete_${id}`

    let buttonDiv = document.createElement('div');
    buttonDiv.appendChild(editButton);
    buttonDiv.appendChild(deleteButton);
    li.appendChild(buttonDiv);
    inputBox.value = '';
}

listContainer.addEventListener("click", function (e) {

    // if (e.target.textContent === 'Delete') {
    //     e.target.parentElement.parentElement.remove()
    // }
    // else if (e.target.textContent === 'Edit') {
    //     let taskText = e.target.parentElement.previousSibling;
    //     let currentText = taskText.textContent;
    //     inputBox.value = currentText;
    // }

    let id = e.target.id.split('_').pop();
    let id_2 = e.target.id;
    let editButton = document.querySelector(`#edit_${id}`);
    let deleteButton = document.querySelector(`#delete_${id}`);
    let list = document.querySelector(`#list_${id}`);
    if (id_2 == editButton.id) {
        console.log(list);
        inputBox.value = list;
        list.remove();
    }
    else if (id_2 == deleteButton.id) {
        list.remove();
    }

})


