const express = require('express')
const app = express()
const port = 3000

//middleware
/* app.use(function(res,req,next){
    console.log("this is middleware")
    next()
}) */
app.set("view engine","ejs");


app.get('/', function (req, res) {
  let students="Kajal And Shubham";
  res.render("index",{name:students});
});
app.get('/contact', function(req, res) {
  res.render("contact")
})
//author/books/issues/:username
/* app.get('/profile/:username', (req, res) => {
  res.send(`Hello from all ${req.params.username}`)
}) */

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
