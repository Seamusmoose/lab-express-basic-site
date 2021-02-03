const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    console.log('home')
    res.sendFile(__dirname + '/view/homepage.html')
})

app.get('/about', function (req, res) {
    console.log('about')
    res.sendFile(__dirname + '/view/about.html')
})

app.get('/works', function (req, res) {
    console.log('work')
    res.sendFile(__dirname + '/view/works.html')
})


app.listen(4000, () => {
    console.log('server is listening')
})