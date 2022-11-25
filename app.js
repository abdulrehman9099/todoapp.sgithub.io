var list = document.getElementById("list");

console.log(firebase)


function addTodo(){
    var todo_item = document.getElementById("todo-item");
    var li = document.createElement('li');
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText);



    var delBtn = document.createElement("BUTTON")
    var btnText = document.createTextNode("DELETE")
    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("onclick","deleteItem(this)")
    delBtn.appendChild(btnText);
     
    var editBtn = document.createElement("BUTTON")
    var editText = document.createTextNode("Edit")
    editBtn.appendChild(editText)
    editBtn.setAttribute("class","btn")
    editBtn.setAttribute("onclick","editItem(this)")



    li.appendChild(delBtn);
    li.appendChild(editBtn)

    list.appendChild(li);

    todo_item.value ="";
}
function deleteItem(e){
    e.parentNode.remove();
}
function delALL(){
    list.innerHTML = "";
}

function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter The new value",val)
    e.parentNode.firstChild.nodeValue= editValue;
    console.log(e);
}

