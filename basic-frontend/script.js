    let todos = [];
    let ctr = -1;
// Frontend code for pushing a todo to todos with a different id for all todos
function addTodo() {
    ctr++;
    const input = document.querySelector("input");
    if (input.value === "") return; // Prevent adding empty tasks

    todos.push({
    title: input.value,
    id: ctr
    });

    input.value = ""; // Clear the input field
    console.log(todos);
}