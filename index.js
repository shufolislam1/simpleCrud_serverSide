const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const port = 5000;


const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// connexting mongoose
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/product')
.then(() => {console.log('Database connected successfully')})
.catch(error => console.log(error))

// routes
app.post('/addItem', async (req, res) => { //routes er bodol e app. use kora lagse. route use korle kaj kore na
    const addnewItem = await req.body;
    console.log(addnewItem);
    res.send({message: "success"})
})
app.get('/',  (req,res)=> {
     res.send({message: "success"});
    // console.log('something');
})

// app listen
app.listen(port, () =>{
    console.log(`App listening on port ${port}`);
})