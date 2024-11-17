const express = require("express");

const app = express();
let todos =[];
// Store the datas (todo objects ) in a file which is the basic foundation for learning databases
// add user logic
app.post('/', function(req,res){
    // create a random id for todo
    // extract the todo id from the body
    todos.push({
        title,
        id
    })

})
app.delete('/', function(req,res){
    // extract the todo id
    // remove the todo from here
})
app.get('/', function (req,res){
    res.json({

    })
})