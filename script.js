let tasks = JSON.parse(localStorage.getItem("tasks")) || []

function saveTasks(){
localStorage.setItem("tasks", JSON.stringify(tasks))
}

function render(){

const list = document.getElementById("list")
list.innerHTML=""

tasks.forEach((task,index)=>{

const li = document.createElement("li")

const title = document.createElement("div")
title.className="task-title"
title.innerText=task.text

if(task.done){
title.classList.add("completed")
}

const date = document.createElement("div")
date.className="task-date"
date.innerText="📅 "+task.date

const notes = document.createElement("div")
notes.className="task-notes"
notes.innerText="📝 "+task.notes

const actions = document.createElement("div")
actions.className="actions"

const doneBtn = document.createElement("button")
doneBtn.innerText="Selesai"
doneBtn.className="done"

doneBtn.onclick=()=>{
tasks[index].done=!tasks[index].done
saveTasks()
render()
}

const editBtn = document.createElement("button")
editBtn.innerText="Edit"
editBtn.className="edit"

editBtn.onclick=()=>{
const newText = prompt("Edit tugas:",task.text)
if(newText){
tasks[index].text=newText
saveTasks()
render()
}
}

const delBtn = document.createElement("button")
delBtn.innerText="Hapus"

delBtn.onclick=()=>{
tasks.splice(index,1)
saveTasks()
render()
}

actions.appendChild(doneBtn)
actions.appendChild(editBtn)
actions.appendChild(delBtn)

li.appendChild(title)
li.appendChild(date)
li.appendChild(notes)
li.appendChild(actions)

list.appendChild(li)

})

}

function addTask(){

const text=document.getElementById("task").value
const date=document.getElementById("date").value
const notes=document.getElementById("notes").value

if(text==="") return

tasks.push({
text:text,
date:date,
notes:notes,
done:false
})

document.getElementById("task").value=""
document.getElementById("date").value=""
document.getElementById("notes").value=""

saveTasks()
render()

}

render()
