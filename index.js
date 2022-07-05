let task = [];
const button = document.querySelector(".add-button");
const input = document.querySelector(".new-task");
button.addEventListener("click", addTask);

function addTask() {
  const newTask = {
    task: input.value,
  };
  task = [];
  task.push(newTask);
  localStorage.setItem(task, JSON.stringify(task));
  console.log(task);
  console.log(localStorage);
  getToDoList(task);
}

function getToDoList(tasks) {
  const ul = document.querySelector(".list");
  const allTask = tasks.map((el) => {
    const li = document.createElement("li");
    li.classList.add("task");
    li.onclick = () => {
        li.classList.toggle('compl-task');
    }
    li.append(el.task);
    console.log("li", li);

    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = "DELETE";
    btn.onclick = () => {
        li.remove();
    }

    li.prepend(btn)

    return li;
  });

  return ul.append(...allTask);
}
