 let todolist = [];

 function add() {

     let name = document.getElementById('input-text').value
     document.getElementById('input-text').value = ''
     let dueDate = document.getElementById('input-date').value;
     document.getElementById('input-date').value = '';
     let dueTime = document.getElementById('input-time').value;
     document.getElementById('input-time').value = '';
     todolist.push({ name, dueTime, dueDate })
     display();
 }

 function display() {

     let todoHTML = ''
     todolist.forEach((todolist, i) => {
         let { name, dueTime, dueDate } = todolist
         todoHTML += `<div>${name} </div>  
         <div>${dueTime}</div><div>${dueDate}</div>
         <button id='delete-button'
         onclick='todolist.splice(${i},1)
         display();
         '
         >Delete</button>`
     })
     document.getElementById('container').innerHTML = todoHTML

 }