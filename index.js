var addItemInput = document.getElementById("add-item-input");
var addItemButton = document.getElementById("add-item-button");

addItemButton.addEventListener("click", function addTask() {
  if (addItemInput.value !== "") {
    var listItem = createNewTask(addItemInput.value)
    incompleteTasksList.appendChild(listItem)
  }
  addItemInput.value = ""
})

function createNewTask(addValue) {
  var listItem = document.createElement("li");
  listItem.className = "view-mode"

  var checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.onchange = checkBoxHandler

  var h4 = document.createElement("h4");
  h4.innerText = addValue;

  var input = document.createElement("input");
  input.id = "edit-input";
  input.type = "text";
  input.value = addValue;

  var editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.onclick = editButtonHandler;

  var deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete"
  deleteButton.onclick = deleteButtonHandler;

  listItem.appendChild(checkBox);
  listItem.appendChild(h4);
  listItem.appendChild(input);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem
}

function checkBoxHandler() {
  if (this.checked == true) {
    completedTasksHolder.appendChild(this.parentNode)
  } else {
    incompleteTasksList.appendChild(this.parentNode)
  }
}

function editButtonHandler() {
  if (this.parentNode.className == "edit-mode") {
    this.parentNode.className = "view-mode"
    let h4 = this.parentNode.children[1]
    let input = this.parentNode.children[2]
    h4.innerText = input.value
  }
  else
    this.parentNode.className = "edit-mode"
}


function deleteButtonHandler() {
  let li = this.parentNode
  li.remove()
}

var incompleteTasksList = document.getElementById("incomplete-tasks");
var completedTasksHolder = document.getElementById("completed-tasks");






