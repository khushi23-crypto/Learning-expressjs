const express = require('express')
const app = express()
const port = 3000

//middleware
app.use(function(res,req,next){
    console.log("this is middleware")
    next()
})
app.get('/', (req, res) => {
  res.send('Hello World! hii bye hlwwwww')
})
app.get('/profile', (req, res) => {
  res.send('This is my profile')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
