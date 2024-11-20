// Backend test folder for learning, will later link with frontend

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
  });