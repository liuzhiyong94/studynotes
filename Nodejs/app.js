var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send("服务启动")
})

app.post('/login', function (req, res) {
    res.send({ status: 200, message: 'succ', data: { name: '康康', token: new Date().getTime() } })
})

app.post('/upload', function (req, res) {
    console.log('req:', req.files);
})


var port = '3000'
app.listen(port, function () {
    console.log(`服务器启动在[${port}]`)
})