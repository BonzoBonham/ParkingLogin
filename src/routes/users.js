const express = require('express')
const router = express.Router()
const User = require('../models/user')
const path = require('path')
const speakeasy = require('speakeasy')

router.post('/create', async (req, res) => {
  try {
    let username = req.body.username
    let password = req.body.password

    let secret = speakeasy.generateSecret({ length: 20 })

    const user = new User({
      username,
      password,
      secret32: secret.base32,
      uri: secret.otpauth_url
    })
    res.send({ status: true })
  } catch (error) {
    console.log('Error-> ' + error)
    res.send({ status: false })
  }
})

router.get('/debug', async (req, res) => {
  const users = await User.find()
  res.send(users)
})

router.get('/', async (req, res) => {
  const users = await User.find()
  res.sendFile('qr.html', {
    root: path.join(__dirname, '../public')
  })
})

module.exports = router
