const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const ClientRouter = require('./routes/client');
const LoanRouter = require('./routes/loan');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;


//supress mongoose deprecation warning
mongoose.set('strictQuery', true);


//middleware
app.use(cors());
app.use(express.json());


//mongodb connection
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log(`MongoDB database connected successfully.`);
});


app.use('/client', ClientRouter )
app.use('/loan', LoanRouter )



//run the server
app.listen(port, ()=>{
    console.log(`Server is running in port: ${port}`);
});