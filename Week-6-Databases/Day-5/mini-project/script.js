// Retrieve existing tasks from localStorage or initialize an empty array
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to save tasks in localStorage
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent form submission from refreshing the page

  // Retrieve task details from the form
       const taskName = document.getElementById('name').value;
       const taskDescription = document.getElementById('description').value;
       const taskStartDateTime = document.getElementById('start-date-time').value;
       const taskEndDateTime = document.getElementById('end-date-time').value;
       
  
  // Create a new task object with default values
  const newTask = {
    name: taskName,
    description: taskDescription,
    startDateTime: taskStartDateTime,
    endDateTime: taskEndDateTime,
    isCompleted: false
  };
  
  // Add the new task to the tasks array
  tasks.push(newTask);
  
  // Save the updated tasks array in localStorage
  saveTasks();
  
//  // Sort tasks in ascending order based on start date
//  tasks.sort((a, b) => new Date(a.startDateTime) - new Date(b.startDateTime));

  // Clear the form
  document.getElementById('name').value = '';
  document.getElementById('description').value = '';
  document.getElementById('start-date-time').value = '';
  document.getElementById('end-date-time').value = '';
}
// Attach the handleSubmit function to the form's submit event
document.getElementById('task-form').addEventListener('submit', handleSubmit);

//------------------------------------------

  function calculateDaysLeft(endDateTime) {
    const now = new Date();
    const end = new Date(endDateTime);
    const timeDiff = end.getTime() - now.getTime();
    const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysLeft;
  }


  // Generate task display
  const taskList = document.getElementById('task-list');
  tasks.forEach(function(task) {
    const li = document.createElement('li');
    const name = document.createElement('h2');
    const description = document.createElement('div');
    const startDate = document.createElement('p');
    const endDate = document.createElement('p');
    const daysLeft = document.createElement('p');
    const smallText = document.createElement('p');
    const checkbox = document.createElement("input");

    const deleteBtn = document.createElement('button');
    const editButton = document.createElement('button');
    

    checkbox.type = "checkbox";
    checkbox.checked = task.isCompleted;
    checkbox.addEventListener('change', function() {
      task.isCompleted = checkbox.checked;
      updateTaskStatus(li, task);
      saveTasks();
    })

    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function() {
      editTask(li, task);
    });


    name.textContent = task.name;
    description.textContent = `Description: ${task.description}`;
    startDate.textContent = `Starting date: ${task.startDateTime}`;
    endDate.textContent = `Ending date: ${task.endDateTime}`;
    daysLeft.textContent = `Days left to complete: ${calculateDaysLeft(task.endDateTime)}`;
    smallText.innerHTML= 'Done:';
    deleteBtn.innerText = 'DELETE';

    li.appendChild(name); 
    li.appendChild(description);
    li.appendChild(startDate);
    li.appendChild(endDate);
    li.appendChild(daysLeft);
    li.appendChild(smallText)
    smallText.appendChild(checkbox);
    li.appendChild(deleteBtn);
    li.appendChild(editButton);

    updateTaskStatus(li, task);

    taskList.appendChild(li);


    //----MAKE DESCRIPTION DISAPPEAR----
    description.addEventListener('click', function() {
      description.style.display = description.style.display === 'none' ? 'block' : 'none';  
    });
    // startDate.addEventListener('click', function() {
    //   startDate.style.display = startDate.style.display === 'none' ? 'block' : 'none';  
    // });
    // daysLeft.addEventListener('click', function() {
    //   daysLeft.style.display = daysLeft.style.display === 'none' ? 'block' : 'none';  
    // });


//--------DELETE BUTTON---------
    deleteBtn.addEventListener('click', function() {
    li.remove();
    confirm("Are you sure??")
  })});

 // Function to update task status and apply styles
 function updateTaskStatus(li, task) {
  const now = new Date();
  const endDate = new Date(task.endDateTime);

  if (task.isCompleted) {
    li.classList.remove('uncompleted', 'overdue');
    li.classList.add('completed');
  // } else if (now > endDate) {
  //   li.classList.remove('completed', 'uncompleted');
  //   li.classList.add('overdue');
  } else {
    li.classList.remove('completed', 'overdue');
    li.classList.add('uncompleted');
  }
}

  

// Function to edit task details
function editTask(li, task) {
  const nameElement = li.querySelector('h2');
  const startDateElement = li.querySelector('p');
  const daysLeftElement = li.querySelector('p:nth-child(3)');
  const descriptionElement = li.querySelector('div');
  const editButton = li.querySelector('button');
  
  nameElement.contentEditable = true;
  startDateElement.contentEditable = true;
  daysLeftElement.contentEditable = true;
  descriptionElement.contentEditable = true;

  nameElement.addEventListener('blur', function() {
    task.name = nameElement.textContent;
    saveTasks();
  });

  startDateElement.addEventListener('blur', function() {
    task.startDateTime = startDateElement.textContent;
    saveTasks();
  });

  daysLeftElement.addEventListener('blur', function() {
    // Assuming days left is not editable, so no need to update task data
  });

  descriptionElement.addEventListener('blur', function() {
    task.description = descriptionElement.textContent;
    saveTasks();
  });

  editButton.textContent = 'Save';
  editButton.removeEventListener('click', editTask);
  editButton.addEventListener('click', function() {
    saveEditedTask(li, task);
  });
}

// Function to save edited task details
function saveEditedTask(li, task) {
  const nameElement = li.querySelector('h2');
  const startDateElement = li.querySelector('p');
  const daysLeftElement = li.querySelector('p:nth-child(3)');
  const descriptionElement = li.querySelector('div');
  const editButton = li.querySelector('button');
  
  nameElement.contentEditable = false;
  startDateElement.contentEditable = false;
  daysLeftElement.contentEditable = false;
  descriptionElement.contentEditable = false;

  editButton.textContent = 'Edit';
  editButton.removeEventListener('click', saveEditedTask);
  editButton.addEventListener('click', function() {
    editTask(li, task);
  });

  updateTaskStatus(li, task);
  saveTasks();
}

//-------------------------------------------------

  // document.getElementById('task-form').addEventListener('submit', function(event) {
  //   event.preventDefault();
  //   handleSubmit(event);
  //   window.location.href = 'next-page.html';
  // });