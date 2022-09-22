const addForm = document.querySelector(".add");
const todoList = document.querySelector(".todos")
let counter = 10
const generateTemplate = todo => {
    const html = `
            <li class="list-group-item d-flex justify-content-between align-items-center" id="nieco${counter}">
                <span>${todo}</span>
                <i class="far fa-trash-alt delete"></i>
            </li>
            `;
    todoList.innerHTML += html;

    
};


addForm.addEventListener("submit", e => {
    e.preventDefault();
    const todo = addForm.addField.value.trim(); // trim method removes the black spaces after text
    // console.log(todo);
    if(todo.length){  // if a todo is text add it otherwise wont :)
        generateTemplate(todo);
        addForm.reset(); // reset all input fields in form 
    }
    

});

// delete todos 
todoList.addEventListener("click", e => { // attatch event listener to the dom 
    if(e.target.classList.contains("delete")){ // check if the thing we clicked has that class
        e.target.parentElement.remove(); // delete the whole li tag
    }
});


// searching todos 
const search = document.querySelector(".search input");

const filterToDos = (term) => {
    // console.log(Array.from(todoList.children));
    Array.from(todoList.children)
        .filter((singleToDo) => {
            //return singleToDo.textContent
            // console.log(singleToDo.textContent)
            // return true
            return !singleToDo.textContent.toLowerCase().includes(term); // check if the text contains searching word and if it does remove it from the array cuz in futore we can loop through the array and add hide class to those elements 
        })
        .forEach((singleToDo) => {
            singleToDo.classList.add("filtered")
        });


        Array.from(todoList.children)
        .filter((singleToDo) => {
            //return singleToDo.textContent
            // console.log(singleToDo.textContent)
            // return true
            return singleToDo.textContent.toLowerCase().includes(term); // check if the text contains searching word and if it does remove it from the array cuz in futore we can loop through the array and add hide class to those elements 
        })
        .forEach((singleToDo) => {
            singleToDo.classList.remove("filtered")
        });

};


search.addEventListener("keyup" , () => {
    const term = search.value.trim().toLowerCase(); // what a user is typing in 

    filterToDos(term);

});

