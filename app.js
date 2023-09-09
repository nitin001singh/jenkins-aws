const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
}) 

app.get('/aboutus', (req, res) => {
    res.send('This is about us project')
  })

  app.get('/contact', (req, res) => {
    res.send('This is contact us project')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})