 let todolist = [];

 if (todolist.length === 0) {
     document.getElementById('container').style.display = "none";
 }

 function add() {
     let name = document.getElementById('input-text').value
     document.getElementById('input-text').value = '';
     let dueDate = document.getElementById('input-date').value;
     document.getElementById('input-date').value = '';

     if (name === '' || dueDate === '') {
         alert("fill the required field")
     } else {
         todolist.push({ name, dueDate })
         localStorage.setItem('toDo', todolist)
         display();
     }
 }

 function display() {
     if (todolist.length === 0) {
         document.getElementById('container').style.display = "none";
     } else {
         let todoHTML = '';

         todolist.forEach((todolist, i) => {
             todoHTML += `<p>${ todolist.name} </p>  
         <p>${todolist.dueDate}</p>
         <button id='delete-button'
         onclick='todolist.splice(${i},1)
         display();
         '
         >Delete</button>`

         })

         document.getElementById('container').style.display = "grid ";
         document.getElementById('container').innerHTML = todoHTML
     }
 }