const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.get('/', async (req, res) => {
  res.redirect('http://localhost:3000')
  // const users = await User.find()
  // res.json(users)
})

// router.get('/:id', async (req, res) => {
//   const user = await User.findById(req.params.id)
//   res.json(user)
// })

// router.post('/', async (req, res) => {
//   const { title, description } = req.body
//   const user = new User({
//     title,
//     description
//   })
//   console.log(user)
//   await user.save()
//   res.json({ status: 'User saved' })
// })

// router.put('/:id', async (req, res) => {
//   const { title, description } = req.body
//   const newUser = { title, description }
//   await User.findByIdAndUpdate(req.params.id, newUser)
//   res.json({ status: 'User updated' })
// })

// router.delete('/:id', async (req, res) => {
//   await User.findByIdAndRemove(req.params.id)
//   res.json({ status: 'User deleted' })
// })

module.exports = router
