const input = document.querySelector("input");
const ul = document.querySelector("ul");
const all_todos = document.querySelector("#allTodos");
const active_todos = document.querySelector("#active");
const completed_todos = document.querySelector("#completed");
const remaining = document.querySelector("#remaining");
const KEY = "K2n4-Eq35-Nd10-Xp69-z78b";
const saveTodos = () => localStorage.setItem(KEY, ul.innerHTML);

ul.innerHTML = localStorage.getItem(KEY);

const update = () => {
	const li = document.querySelectorAll("li");
	const span = document.querySelectorAll("span");
	for(let i = 0; i < li.length; i++){
		let toggle = 0;
		li[i].addEventListener("click", function(){
			toggle = toggle + 1;
			if(toggle % 2 !== 0){ 
				this.className = "completed"; 
			} else { 
				this.className = "active"; 
			}
			saveTodos();
		});
	}
	for(let i = 0; i < span.length; i++){
		span[i].addEventListener("click", function(){
			this.parentElement.remove();
			remaining.innerHTML = ul.children.length
			saveTodos();
		});
	}
	saveTodos();
	remaining.innerHTML = ul.children.length;
}

input.addEventListener("keydown", (event) =>  {
	if (event.keyCode === 13 && input.value !== "") {
		const text = document.querySelector("input").value;
		const newLi = document.createElement("li");
		newLi.className = "active";
		newLi.innerHTML = "<span> <i>X</i> </span>" + text;
		ul.appendChild(newLi);
		input.value = "";
		update(); 
	}
});

update();