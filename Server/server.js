const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./router/routes');

const app = express();
app.use(bodyParser.json());
app.use('/', router)

const connectionString = 'mongodb://localhost:27017/react-shoppingocart';
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then( res => console.log('conniction Done'))

app.listen(5001, () => {
    console.log('Running on port 5001')
})