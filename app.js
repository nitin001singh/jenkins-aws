const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
}) 

app.get('/aboutus', (req, res) => {
    res.send('This is about us page')
  }) 

app.get('/contact', (req, res) => {
  res.send('This is contact us page')
})

app.get('/privacy', (req, res) => {
  res.send('This is privacy page')
})

app.get('/terms', (req, res) => {
  res.send('This is terms page')
})
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})