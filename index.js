const express = require("express")

const app = express();
let todos =[];
// Store the datas (todo objects ) in a file which is the basic foundation for learning databases
// add user 
const ctr =0;

function addTodo() {
    // MISTAKES :
    ctr++; //CTR IS A CONST VALUE CANT CHANGE
    const inputValue = document.querySelector("input");

    /*DOCUMENT.QUERYSELECTOR IS A CLIENT SIDE METHOD AND IT SHOULDNT BE
        WRITTEN IN A BACKEND CODE AND ALL THE INPUT VALUES SHOULD BE HANDLED
        BY HTTP REQUESTS LIKE POST,GET ETC. 
    */

    app.post(`/${inputValue}`, function (req,res){

        /*
         Incorrect Endpoint and Input Handling
         inputValue is undefined (since document.querySelector won't work in Node.js).
Dynamic route names (like /${inputValue}) are unusual for creating a new resource. 
        A fixed endpoint like /todos is more appropriate.
         */
        const title = inputValue; //dont do like frontend, think like backend
        const id = ctr;//error. 
        console.log(req.body)
        // create a random id for todo
        // extract the todo id from the body
        todos.push({
            title,
            id
        });
        res.json({todos})
    
    })
}
/*CONCLUSION : 
    I need to know how to get the input value from the frontend to the http server
    using post method.
 */




// app.post(``, function (req,res){
//     // create a random id for todo
//     // extract the todo id from the body
//     todos.push({
//         title,
//         id
//     })

// })
app.delete('/', function(req,res){
    // extract the todo id
    // remove the todo from here
})
app.get('/', function (req,res){
    res.json({

    })
})