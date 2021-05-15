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
    birthDate :{
        type: Date
    },
    number :{
        type: Number
    },
    pets :[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Animal"
    }],
    accessories :[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Accessory"
    }]
})    


mongoose.exports = mongoose.model('Veto', vetoSchema)