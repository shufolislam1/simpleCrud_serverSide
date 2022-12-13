const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const port = 5000;

// schema
const schema = new mongoose.Schema({ name: 'string', price: Number, quantity: Number });
const test = mongoose.model('test', schema);


const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// connexting mongoose
// username: BengalSoft, pass: ybeXXUiq6cwuXQwB
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://BengalSoft:ybeXXUiq6cwuXQwB@cluster0.yolw1ce.mongodb.net/?retryWrites=true&w=majority')
.then(() => {console.log('Database connected successfully')})
.catch(error => console.log(error))

// routes
app.post('/addItem', async (req, res) => { //routes er bodol e app. use kora lagse. route use korle kaj kore na
    const addnewItem = new test(req.body);
    const savedItem= await addnewItem.save();
    res.send(savedItem);
})
app.get('/',  async (req,res)=> {
     const info = await test.find({});
     res.send(info);
    // console.log('something');
})

// app listen
app.listen(port, () =>{
    console.log(`App listening on port ${port}`);
})