var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {postProduction} = require('./controller/postProducts');
let {getProducts, getProductById} = require('./controller/getProducts');

var app = express();
const port = process.env.PORT || 3000

app.use(bodyParser.json());

app.post('/products', (req, res) => {
    postProduction(req, res);
});

app.get('/products', (req, res) => {
    getProducts(req, res);
});

app.get('/products/:id', (req, res) => {
    getProductById(req, res);
});

app.listen(port, () => {
    console.log(`started up at port ${port}`);
});
