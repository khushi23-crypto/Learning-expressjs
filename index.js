const express = require('express')
const path = require('path');
const app = express()
const port = 3000

/* const kajalMiddleware = (req, res, next) => {
    console.log("This is kajal middleware")
    next()
} */
app.use(express.static(path.join(__dirname, "public")))
//app.use(kajalMiddleware)
app.get('/hello/:name', (req, res) => {
    res.send('Hello World!'+ req.params.name)
})
app.get('/about', (req, res) => {
    //res.sendFile(path.join(__dirname, 'index.html'))
    res.join({ "kajal": 20 })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})