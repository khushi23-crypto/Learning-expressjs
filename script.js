const express = require('express')
const app = express()
const port = 3000

//middleware
app.use(function(res,req,next){
    console.log("this is middleware")
    next()
})
app.set("view engine","ejs");


app.get('/', (req, res) => {
  res.render("index")
})
app.get('/profile', (req, res) => {
  res.send('This is my profile')
})
//author/books/issues/:username
app.get('/profile/:username', (req, res) => {
  res.send(`Hello from all ${req.params.username}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
