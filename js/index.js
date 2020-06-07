/***** Select Elements  */

const addBtn = document.getElementById('add');

const addTask = document.getElementById('task');

/********************************************************************* */

/****Add Function */

addBtn.onclick = ()=>{
  const taskValue = addTask.value ;

  if(addTask.value){
    const newTaskCont = document.getElementById("newContainer");

    const addTask = document.createElement("div");

    addTask.classList.add("item");

    addTask.setAttribute('onClick','removeDivOnClick(this)');

    addTask.innerHTML =
    `<h2 class="item_input">` +
    taskValue +
    `</h2><button id="remove" class="genBtnStyle" onClick="remove(this)">REMOVE</button>`;

    newTaskCont.appendChild(addTask);

    newTaskCont.insertBefore(addTask, newTaskCont.firstChild); 

    document.getElementById('task').value='';


 
} else alert('Please Enter Task');

}

/**************************************************************** */
/***Remove Button Function */



remove= item => {
  const removeItem = item;
  removeItem.parentNode.remove();
}

/*************************************************************** */

/****Remove Div On Click Function */

removeDivOnClick = elem =>{
  const removeElem = elem;
  removeElem.remove();
}

/*************************************************************** */