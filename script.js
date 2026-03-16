function addTodo(){

let input = document.getElementById("todoInput")
let text = input.value

if(text === ""){
alert("Isi tugas dulu")
return
}

let li = document.createElement("li")
li.textContent = text

li.onclick = function(){
li.classList.toggle("done")
}

let deleteBtn = document.createElement("button")
deleteBtn.textContent = "Hapus"

deleteBtn.onclick = function(){
li.remove()
}

li.appendChild(deleteBtn)

document.getElementById("todoList").appendChild(li)

input.value=""
}
