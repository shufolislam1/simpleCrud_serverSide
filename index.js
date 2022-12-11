const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const port = 5000;

const app = express();

app.use(express.json());
app.use(cors())

// connexting mongoose
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017')
.then(() => {console.log('Database connected successfully')})
.catch(error => console.log(error))

// routes


// app listen
app.listen(port, () =>{
    console.log(`App listening on port ${port}`);
})