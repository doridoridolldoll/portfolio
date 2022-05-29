var express = require('express')
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({limit:'1gb',extended:false}))

app.use(express.urlencoded());
app.post("/", function (request, response) {
    console.log(request.body.user.name);
    console.log(request.body.user.email);
});
