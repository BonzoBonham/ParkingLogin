const express = require('express')
const router = express.Router()
const User = require('../models/user')
const path = require('path')
const speakeasy = require('speakeasy')
const QRCode = require('qrcode')

router.post('/create', async (req, res) => {
  let username = req.body.username
  let password = req.body.password
  if (
    username !== '' &&
    password !== '' &&
    username !== null &&
    password !== null
  ) {
    let secret = speakeasy.generateSecret({ length: 20 })

    const user = new User({
      username,
      password,
      secret32: secret.base32,
      uri: secret.otpauth_url
    })
    await user.save()

    let uri = 'pp'

    const generateQR = async text => {
      try {
        uri = await QRCode.toDataURL(text)
      } catch (err) {
        console.error(err)
      }
    }

    await generateQR(secret.otpauth_url)

    res.send({ status: true, uri })
  } else {
    res.send({ status: false })
  }
})

router.post('/login', async (req, res) => {
  let username = req.body.username
  let password = req.body.password

  if (
    username !== '' &&
    password !== '' &&
    username !== null &&
    password !== null
  ) {
    let dbUser = await User.findOne({ username, password })

    if (dbUser) {
      // let uri = 'pp'

      // const generateQR = async text => {
      //   try {
      //     uri = await QRCode.toDataURL(text)
      //   } catch (err) {
      //     console.error(err)
      //   }
      // }

      // await generateQR(dbUser.uri)

      res.json({ status: true })
    } else {
      res.json({ status: false })
    }
  } else {
    console.log('--Error--')
    res.json({ status: false })
  }
})

router.post('/token', async (req, res) => {
  let username = req.body.username
  let password = req.body.password

  let dbUser = await User.findOne({ username, password })

  if (dbUser) {
    let validation = speakeasy.totp.verify({
      secret: dbUser.secret32,
      encoding: 'base32',
      token: req.body.token,
      window: 0
    })
    res.json({ validation })
    // if (validation) {
    //   res.sendFile('qr.html', {
    //     root: path.join(__dirname, '../public')
    //   })
    // }
  } else {
    res.json({ validation: false })
  }
})

router.get('/', async (req, res) => {
  const users = await User.find()
  res.sendFile('qr.html', {
    root: path.join(__dirname, '../public')
  })
})

module.exports = router
