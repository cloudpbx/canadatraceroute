var express = require('express'),
app = express(),
PORT = process.env.PORT || 8080;
const cors = require('cors')
const data = require('./data');
var request = require("request");



app.listen(PORT);
app.use(cors())


app.get('/', (req, res) => {
    res.json(data);
});


app.get('/ping', (req, res) => {

    request("https://atlas.ripe.net/api/v2/measurements/24255289/results/?format=json", function(error, response, body) {
        res.json(body)
    });
})




console.log(`todo list RESTful API server started on ${PORT}`);