const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send("Welcome to Cuttr")
    res.status(200)
})

app.post('/cut', (req, res) => {
    res.send("Cutting the Url"),
    res.status(201);
})

app.listen(3000, () => {
    console.log("app running on http://localhost:3000")
})