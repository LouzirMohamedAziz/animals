
var express = require('express');
var router = express.Router();
var User = require('../models/user')

// GET Users
router.get('/', async(req,res)=>{
  try {
    const users = await User.find()
    res.json(users)
  } catch (error) {
    res.send('Error: '+error)
  }
})

// GET User
router.get('/:id',async(req,res)=>{
  try {
    const user = await User.findById(req.params.id)
    res.json(users)
  } catch (error) {
    res.send('Error: '+error)
  }
})


// POST User
router.post('/',async(req,res)=>{
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    address: req.body.address,
    birthDate: req.body.birthDate,
    number: req.body.number,
    pets: req.body.pets,
    accessories: req.body.accessories
  })  
  try {
    const newUser = await user.save()
    res.json(newUser)
  } catch (error) {
    res.send('Error :'+error)
  }
})

// GET User
router.get('/:id',async(req,res)=>{
  try {
    const user = await User.findById(req.params.id)
    res.json(users)
  } catch (error) {
    res.send('Error: '+error)
  }
})
module.exports = router;
