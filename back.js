const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/login', function (req, res) {
  fs.readFile('index.html', function (err, data) {
    res.send(data.toString())
  })
})
app.get('/main', function (req, res) {
  fs.readFile('regi.html', function (err, data) {
    res.send(data.toString())
  })
})
app.get('/welcome', function (req, res) {
    fs.readFile('welcome.html', function (err, data) {
      res.send(data.toString())
    })
  })

app.post('/login', function (req, res) {
  const id = req.body.id
  const password = req.body.pass

  console.log(id, password)
  console.log(req.body)
})
app.post('/main', function (req, res) {
    const id = req.body.id
    const password = req.body.pass
    const name = req.body.name
    const repass = req.body.repass
  
    console.log(name, id, password, repass)
    console.log(req.body)
  })

app.listen(52273, function () {
  console.log('server is running')
})