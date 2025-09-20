const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! hii bye hlwwwww')
})
app.get('/profile', (req, res) => {
  res.send('This is my profile')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
