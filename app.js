const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//middlewares
app.use(cors());
app.use(bodyParser.json());

//import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute); // middleware

//Routes
app.get('/', (req, res) => {
    res.send("Welcome to express baby!");
});



//connect to db
mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser: true },
() => console.log('connected to DB!')
);

//listening to the server
app.listen(3000);