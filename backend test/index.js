// Backend test folder for learning, will later link with frontend

const express = require('express')
const app = express()

app.use(express.json()) // Middleware to parse json body.

/*
    learning: Why use this middleware? - express.json() this method enables to access the received data
    from the client side/ frontend (which is typically in JSON format) to parse it to a javascript object
    which is easier and convenient to acess in the server side and perform different functions
 */
let todos = []; // In-memory array to store todos

//Adding a new todo:
app.post("/todos", function(req,res){
    const {title} = req.body; //Extracting the todo title from the post request.

    //Validating input(to check if input is sent or not from the request)
    if(!title){
        return res.status(400).json({error : "Title is required"});
    }
    const id = Date.now(); //Generating a unique id for the todo.
    const todo = { title, id };
    todos.push(todo); // Adding the todo to the in memory array.
    res.status(200).json(todo) //Respond with the created todo.


})
// Now we have to use the GET method for another test, to check if all the todos are getting added to
// the todos[] array: 

app.get("/todos", function (req, res){
    res.json(todos) //Should respond with all the todos
})

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

// The code is correct and just now tested with Postman!