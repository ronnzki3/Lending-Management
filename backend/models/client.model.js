const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clientSchema = new Schema({
    fname:{
        type: String,
        required: true,
        trim: true
    },
    mname:{
        type: String,
        required: true,
        trim: true
    },
    lname:{
        type: String,
        required: true,
        trim: true
    },
    address:{
        type: String,
        required: true,
        trim: true
    },
    contact: {
        type: String,
        required: false,
        trim: true
    },
},
{
    timestamps:true
});

const Client = mongoose.model('client',clientSchema);

module.exports = Client;