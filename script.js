const express = require('express')
const app = express()
const port = 3000

//middleware
/* app.use(function(res,req,next){
    console.log("this is middleware")
    next()
}) */
app.set("view engine","ejs");
app.use(express.static('./public'))

app.get('/', function (req, res) {
  let students="Kajal And Shubham";
  res.render("index",{name:students});
});

app.get('/contact', function(req, res) {
  res.render("contact")
});

app.get('/error', function(req, res,next) {
  throw Error("something went wrong")
});

app.use(function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
}
)
//author/books/issues/:username
/* app.get('/profile/:username', (req, res) => {
  res.send(`Hello from all ${req.params.username}`)
}) */

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
