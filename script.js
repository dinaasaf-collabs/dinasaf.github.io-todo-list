function addTodo(){

let input = document.getElementById("todoInput")
let text = input.value

if(text === "") return

let li = document.createElement("li")

let span = document.createElement("span")
span.textContent = text

span.onclick = function(){
li.classList.toggle("done")
}

let deleteBtn = document.createElement("button")
deleteBtn.textContent = "X"
deleteBtn.className = "delete"

deleteBtn.onclick = function(){
li.remove()
}

li.appendChild(span)
li.appendChild(deleteBtn)

document.getElementById("todoList").appendChild(li)

input.value=""
}
