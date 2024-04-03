const inputBox = document.querySelector('#input-box')
const listContainer = document.querySelector('#list-container')
function addTask() {
    if (inputBox.value === '') {
        alert("Please enter text")
    } else {
        let li = document.createElement('li');
        li.className = 'task-item form-control form-control-sm mb-2'
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)

        let editButton = document.createElement('button')
        let deleteButton = document.createElement('button')

        editButton.textContent = 'Edit'
        editButton.className = 'btn btn-warning mx-2'


        deleteButton.textContent = 'Delete'
        deleteButton.className = 'btn btn-danger'

        let buttonDiv = document.createElement('div');
        buttonDiv.appendChild(editButton);
        buttonDiv.appendChild(deleteButton);
        li.appendChild(buttonDiv);



    }
    inputBox.value = '';
}

listContainer.addEventListener("click",function(e){
if(e.target.textContent==='Delete'){
    e.target.parentElement.parentElement.remove()
}
else if (e.target.textContent === 'Edit') {
    let taskText = e.target.parentElement.previousSibling;
        let currentText = taskText.textContent;
        inputBox.value = currentText;
        
}
})


