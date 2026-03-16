let tasks = JSON.parse(localStorage.getItem("tasks")) || []

function saveTasks(){
localStorage.setItem("tasks", JSON.stringify(tasks))
}

function renderTasks(){

const list = document.getElementById("todo-list")
list.innerHTML=""

tasks.forEach((task,index)=>{

const li = document.createElement("li")

const span = document.createElement("span")
span.innerText = task.text

if(task.done){
span.classList.add("completed")
}

span.onclick = ()=>{
tasks[index].done = !tasks[index].done
saveTasks()
renderTasks()
}

const actions = document.createElement("div")
actions.classList.add("actions")

const editBtn = document.createElement("button")
editBtn.innerText="Edit"
editBtn.classList.add("edit")

editBtn.onclick = ()=>{
const newText = prompt("Edit tugas:", task.text)
if(newText){
tasks[index].text = newText
saveTasks()
renderTasks()
}
}

const delBtn = document.createElement("button")
delBtn.innerText="Hapus"

delBtn.onclick = ()=>{
tasks.splice(index,1)
saveTasks()
renderTasks()
}

actions.appendChild(editBtn)
actions.appendChild(delBtn)

li.appendChild(span)
li.appendChild(actions)

list.appendChild(li)

})

document.getElementById("task-counter").innerText = "Jumlah tugas: " + tasks.length
}

function addTask(){

const input = document.getElementById("todo-input")

if(input.value==="") return

tasks.push({
text:input.value,
done:false
})

input.value=""

saveTasks()
renderTasks()
}

document.getElementById("darkModeToggle").onclick = ()=>{
document.body.classList.toggle("dark")
}

renderTasks()

