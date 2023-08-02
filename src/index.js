document.addEventListener("DOMContentLoaded", () => {

  const newTask = document.getElementById('create-task-form')
  newTask.addEventListener("submit", (event) => {
      event.preventDefault()

      const task = document.getElementById('new-task-description').value;
      const entry = document.createElement('li');
      entry.appendChild(document.createTextNode(task));
      list.appendChild(entry);
      newTask.reset()
  })


})



//dro down to change text color