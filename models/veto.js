const mongoose = require('mongoose')


const vetoSchema = new mongoose.Schema({

    firstName :{
        type: String,
        required: true
    },
    lastName :{
        type: String,
        required: true
    },
    address :{
        type: String,
        required: true
    },
    mobileNumber :{
        type: Number
    },
    officeNumber :{
        type: Number
    }
    
})


mongoose.exports = mongoose.model('Veto', vetoSchema)