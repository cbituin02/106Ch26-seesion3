var nonImportantClass = "far fa-bell";
var importantClass = "fas fa-bell";
var isImportant = false;
var isFormVisible = false;

function toggleImportant() {
    console.log("icon clicked!");

    if (isImportant) {
        // non important
        isImportant = false;
        $("#iImportant").removeClass(importantClass);
        $("#iImportant").addClass(nonImportantClass);
    }
    else {
        // important
        $("#iImportant").removeClass(nonImportantClass);
        $("#iImportant").addClass(importantClass);
        isImportant = true;
    }
}



function toggleTaskInfo() {
    console.log("button clicked!");

    if (isFormVisible) {
        isFormVisible = false;
        $("#form").hide();
    }
    else {
        isFormVisible = true;
        $("#form").show();
    }
}

function clearForm() {
    $("#txtTitle").val("");
}

function saveTask() {
    console.log("Saving task...");

    let title = $("#txtTitle").val();
    let date = $("#selDate").val();
    let desc = $("#txtDescription").val();
    let contact = $("#txtContact").val();
    let location = $("#txtLocation").val();
    let color = $("#selColor").val();

    // validate
    if(title.length < 5) {
        // show
        alert("Title should be at least 5 chars long");
        return;
    }
    if(!date) {
        // show an error
        alert("Due date is required");
        return;
    }
    if(desc.length < 15) {
        alert("Description should be 15 chars long");
        return;
    }
    if(!contact) {
        alert("Contact is required");
        return;
    }
    if(!location) {
        alert("Location is rquired");
        return;
    }

    let task = new Task(isImportant, title, date, location, contact, desc, color)
    console.log(task);
    
    // save the task

    // display
    displayTask(task);

    // clear form
    clearForm();
}

function displayTask(task) {
    // create a syntax
    let syntax = `<div class="task">
    
        <h5>${task.title}</h5>
        <p>${task.desc}</p>

        <label>${task.date}</label>
        
        <label>${task.contact}</label>
        <label>${task.location}</label>

        <button onclick = "deleteTask()" class= "btn btn-sm btn-danger">Remove</button>

    
    </div>`;

    // append the syntax to en element
    $("#task-list").append(syntax);
}

function deleteTask() {
    console.log("Task Deleted");
}

function init() {
    console.log("Task Manager");

    // event (#=id, . = class)
    $("#iImportant").click(toggleImportant);
    $("#btnTaskInfo").click(toggleTaskInfo);
    $("#btnSave").click(saveTask);

    // laod data
}

window.onload = init;
