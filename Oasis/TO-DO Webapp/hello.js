document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
  });
  
  function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      const task = {
        text: taskText,
        date: new Date().toLocaleString(),
        completed: false,
      };
  
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
  
      loadTasks();
      taskInput.value = '';
    }
  }
  
  function loadTasks() {
    const pendingTasksContainer = document.getElementById('pendingTasks');
    const completedTasksContainer = document.getElementById('completedTasks');
    pendingTasksContainer.innerHTML = '';
    completedTasksContainer.innerHTML = '';
  
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
    tasks.forEach(task => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
        <span>${task.date}</span>
        <button class="delete-btn" onclick="deleteTask('${task.text}')">Delete</button>
        <button class="delete-btn" onclick="toggleComplete('${task.text}')">${task.completed ? 'Undo' : 'Complete'}</button>
      `;
  
      if (task.completed) {
        completedTasksContainer.appendChild(listItem);
      } else {
        pendingTasksContainer.appendChild(listItem);
      }
    });
  }
  
  function deleteTask(taskText) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task.text !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks();
  }
  
  function toggleComplete(taskText) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.map(task => {
      if (task.text === taskText) {
        task.completed = !task.completed;
      }
      return task;
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks();
  }
  