const express = require('express')
const fs = require("fs");

const app = express()
const port = 3000

app.get('/', (req, res) => {
    const data = fs.readFileSync("./webProject/index.html")
  res.send(data.toString());
})
app.get('/about', (req, res) => {
    res.send("<h1>Hello, this is about page</h1>");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})