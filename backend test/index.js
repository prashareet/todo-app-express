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

//Delete test in backend

/*
    We have to use the app.delete("/todos::id") something like this where our server can access
    the id and delete it from the backend and send the response back to the frontend.

 */
//Trial code after learning:

app.delete("/todos/:id", function(req,res){
    //Very important concept is params.
    const {id} = req.params; //Extracting the id from route parameters.
    const todoId = parseInt(id,10); // Converting the string to integer
    const index = todos.findIndex((todo) => todo.id ===todoId); //locating the index of the given id todo
    //If index not found, return error
    if(index===-1){
        // return res.status(400).json("Error : Todo not found"); - Mistake syntax
        return res.status(404).json({"error" : "Todo not found"}); //Correct syntax for returning error
    }

    //Remove the todo from the array:
    todos.splice(index,1);
    return res.status(200).json({"message" : "Todo with id:" + index + " deleted successfully"});
})

// After my trial code i am getting an error that json is not defined. why. - Syntactical error

// Another error i am getting is "error" : :"Todo not found.", 
// At least i am getting a response . which means something is wrong with the inside logic of function
// Answer i used const {id} = req.params.id, syntactical error and a bit logical, 
// const id = req.params.id or const {id} = req.params is correct.

// After code is trial and tested, fixing all the errors, delete functionality is working!


/*
    EDIT FUNCTIONALITY - UPDATE, I GUESS WE HAVE TO USE THE PUT METHOD. 
    I have understood the workflow and how to go about it , below is the trial code:
*/
app.put("/todos/:id", function (req,res){
    const {id} = req.params;
    const {title} = req.body; //Note : This should be the updated title recieved from the frontend.

    const todoId = id;
    const todo = todos.find((todo) => todoId===todo.id); //Locate the todo element which has the correct id

    if(!todo){
        //If todo is not present return error message
        return res.status(404).json({"error" : "Todo not found"});
    }

    todo.title = title;//Update the title of the todo
    
    return res.status(200).json(todo) // return the updated todo.
    
})


app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

// The code is correct and just now tested with Postman!