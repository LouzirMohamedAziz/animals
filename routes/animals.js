const express = require('express')
const router = express.Router()
const Animal = require('../models/animal')

// display All Animals
router.get('/', async(req,res)=>{
  try {
    const animals = await Animal.find()
    res.json(animals)
  } catch (error) {
    res.send('Error: '+error)
  }
})

// Display an animal by id
router.get('/:id',async(req,res)=>{
  try {
    const animal = await Animal.findById(req.params.id)
    res.json(animal)
  } catch (error) {
    res.send('Error: '+error)
  }
})


// Insert an animal
router.post('/',async(req,res)=>{
    const animal = new Animal({
    name: req.body.name,
    race: req.body.race,
    age: req.body.age,
    price: req.body.price})
    try {
    const newAnimal = await animal.save()
    res.json(newAnimal)
    } catch (error) {
    res.send('Error: '+error)
  }
})

// Update price of an animal
router.patch('/:id',async(req,res)=>{
  try {
    const animal = await Animal.findById(req.params.id)
    animal.price = req.body.price
    const newAnimal = await animal.save()
    res.json(newAnimal)
  } catch (error) {
    res.send('Error: '+error)
  }
})

// Update an animal
router.put('/:id',async(req,res)=>{
    try {
      const animal = await Animal.findById(req.params.id)
      animal.name = req.body.name
      animal.race = req.body.race
      animal.age = req.body.age
      animal.price = req.body.price
      const newAnimal = await animal.save()
      res.json(newAnimal)
    } catch (error) {
      res.send('Error: '+error)
    }
  })

// Delete An Animal
router.delete('/:id',async(req,res)=>{
    try {
      const animal = await Animal.findById(req.params.id)
      const newAnimal = await animal.remove()
      res.json(newAnimal)
    } catch (error) {
      res.send('Error: '+error)
    }
  })

module.exports = router
