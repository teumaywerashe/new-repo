 let nums = [];

 function update() {
     nums.push(document.getElementById('input-text').value);

     document.getElementById('input-text').value = ''
     display()
 }

 function display() {
     let todoHTML = ''
     for (let i = 0; i < nums.length; i++) {
         todoHTML += `<P>${nums[i]}</p><button id='delete-btn' onclick='nums.splice(
         ${i}
         ,1) 
         display();'>delete</button>`
     }
     document.getElementById('todolist').innerHTML = todoHTML
 }