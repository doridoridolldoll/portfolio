const express = require('express')
const fs = require('fs')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const app = express()

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function (req, res) {
  if (req.cookies.auth) {
    res.send('<h1>Login success</h1>')
  } else {
    res.redirect('/login')
  }
})

app.get('/login', function (req, res) {
  fs.readFile('index.html', function (err, data) {
    res.send(data.toString())
  })
})

app.post('/login', function (req, res) {
  const id = req.body.id
  const password = req.body.pw

  console.log(id, password)
  console.log(req.body)

  if (id == 'admin' && password == '1234') {
    res.cookie('auth', true)
    res.redirect('/')
  } else {
    res.redirect('/login')
  }
})

app.listen(52273, function () {
  console.log('server is running')
})