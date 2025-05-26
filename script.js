function add() {
	let task 	= document.createElement("div");
	task.classList.add("task");

	let text = document.getElementById("inpt").value;

	task.innerHTML = `
	${text} <button id="comp" onclick="completeTask(this)">completed</button> <button id="del" onclick="removeTask(this)">Delete</button>
	` 
	return task;
}

function addButton() {
	let list = document.getElementById("tlist");
	list.appendChild(add());
}

function removeTask(btn) {
	btn.parentElement.remove();
}

function completeTask(btn) {
	btn.parentElement.style.backgroundColor = "gray";
	btn.parentElement.style.color = "white";
	btn.remove();
}