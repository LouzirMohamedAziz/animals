const mongoose = require('mongoose')


const animalSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    race: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
    
})


module.exports = mongoose.model('Animal', animalSchema)