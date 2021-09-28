// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');



// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);

  //remove task event
  taskList.addEventListener("click",removeTask);

  // clear tasks event , it means to clear tasks at once using clear task btn
  clearBtn.addEventListener("click",clearTasks)
  // add filters

  filter.addEventListener("keyup",filterTasks)
}

// Add Task
function addTask(e) {   /// e is nothing but event
  if(taskInput.value === '') {    /* null or no value */
    alert('Add a task');
  }
     /* create li elements*/ 
     const li  = document.createElement("li");
     /* add class*/
     li.className="collection-item";
     // create text node and append to li
     li.appendChild(document.createTextNode(taskInput.value));    // the input we r giving to task is stored here
   
     // create new link
     const link=document.createElement("a");
     link.className="delete-item secondary-content"    /// for targetting class use only delete-item or secondary item depend on our requirement
     //add icon html
     link.innerHTML='<i class=" fa fa-remove"> </i>'  // this will add remove button to list

     //append the link to li
     li.appendChild(link);


     // connect/ append li to ul
     taskList.appendChild(li);


     // local storage
     storeTaskInLocalStorage(taskInput.value)

     // clear tasks
     taskInput.value="";
     
    
  e.preventDefault();
}

//store task
function storeTaskInLocalStorage(task){
  // Store Task
function storeTaskInLocalStorage(task) {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}


}


// remove tasks
function removeTask(e) {
  if(e.target.parentElement.classList.contains       // it means target must be done only on i tag of a 
    ('delete-item')) {
      if(confirm("Are u sure ?")){
       e.target.parentElement.parentElement.remove(); // parent of a tag  is li so deleting or removing whole li
      }
  }  
}



//clear Tasks

function clearTasks(e){
  taskList.innerHTML="";
}

// or  ,we can use while method also to remove all tasks
while(taskList.firstChild){
  taskList.removeChild(taskList.firstChild)
}



///filter
function filterTasks(e){
  const text=e.target.value.toLowerCase();    // we r targetting whatever we typed input
  document.querySelectorAll(".collection-item").forEach
  (function(task){
    const item=task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text)!=-1){
      task.style.display="block";
    }else{
      task.style.display="none";
    
    }
  });

}

