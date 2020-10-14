const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = express.Router();
const controller = require('./controller');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', controller);


module.exports = app;