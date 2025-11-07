// let todos = []

// function createtodo(){
//     if(document.getElementById('todo-input').value == "")  alert('enter the todo fist')
//     Event.preventDefault()
//     todos.push(document.getElementById('todo-input').value)
//    updateDisplay()
//    document.getElementById('todo-input').value = "";
// }


// function removetodo(index){
//    todo.splice(index,1)
// }

// function updateDisplay(){
//     let list = document.getElementById('list')
//     list.innerHTML = ""
//    for(let i=0 ; i<todos.length ; i++){
//    let todo =  document.createElement('div')
//    let paragraph = document.createElement('p')
//    let Deletbutton = document.createElement('button')
//    Deletbutton.innerText = "x";
//    Deletbutton.className = "Delete-button"
//    Deletbutton.onclick = function(){
//       removetodo(i)
//    }
//    paragraph.innerText = [i]
//    todo.className = "todo"
//    todo.appendChild(paragraph)
//    todo.appendChild(Deletbutton)
//    list.appendChild(todo)
// }
// }



let todos = [];

    function createtodo(event) {
      event.preventDefault(); // ✅ correct usage
      let input = document.getElementById('todo-input');
      if (input.value.trim() === "") {
        alert('Enter the todo first');
        return;
      }
      todos.push(input.value);
      input.value = "";
      updateDisplay();
    }

    function removetodo(index) {
      todos.splice(index, 1); // ✅ corrected
      updateDisplay(); // ✅ update UI
    }

    function updateDisplay() {
      let list = document.getElementById('list');
      list.innerHTML = "";
      for (let i = 0; i < todos.length; i++) {
        let todoDiv = document.createElement('div');
        let paragraph = document.createElement('p');
        let deleteButton = document.createElement('button');

        paragraph.innerText = todos[i];
        deleteButton.innerText = "x";
        deleteButton.className = "Delete-button";
        deleteButton.onclick = function () {
          removetodo(i);
        };

        todoDiv.className = "todo";
        todoDiv.appendChild(paragraph);
        todoDiv.appendChild(deleteButton);
        list.appendChild(todoDiv);
      }
    }