var express = require('express'),
app = express(),
PORT = process.env.PORT || 8080;
const cors = require('cors')
const bodyParser = require('body-parser');
const stations = require('./stations')
const data = require('./data')


app.listen(PORT);
app.use(cors())


app.get('/', (req, res) => {
    res.json(data);
})


console.log(`todo list RESTful API server started on ${PORT}`);