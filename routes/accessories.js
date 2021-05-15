const express = require('express')
const Accessory = require('../models/accessory')
const router = express.Router()

// GET ALL
router.get('/',async(req,res)=>{
    try {
        const accessories = await Accessory.find()
        res.json(accessories)
    } catch (error) {
        res.send('Error: ' + error)
    }
})

// GET BY ID
router.get('/:id',async(req,res)=>{
    try {
        const accessory = await Accessory.findById(req.params.id)
        res.json(accessory)
    } catch (error) {
        res.send('Error: ' + error)
    }
})

// POST
router.get('/',async(req,res)=>{
    const accessory = new Accessory({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        available: req.body.available
    })
    try {
        const newAccessory = await accessory.save()
        res.json(newAccessory)
    } catch (error) {
        res.send('Error: ' + error)
    }
})

// PATCH BY ID 
router.get('/:id',async(req,res)=>{
    try {
        const accessory = await Accessory.findById(req.params.id)
        accessory.available = req.body.available
        const newAccessory = await accessory.save()
        res.json(newAccessory)
    } catch (error) {
        res.send('Error: ' + error)
    }
})

//  DELETE BY ID
router.get('/:id',async(req,res)=>{
try {
    const accessory = await Accessory.findById(req.params.id)
        const newAccessory = await accessory.remove()
        res.json(newAccessory)
} catch (error) {
    res.send('Error: ' + error)
}
})

module.exports = router;