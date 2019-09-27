const speakeasy = require('speakeasy')
var QRCode = require('qrcode')
const express = require('express')
const router = express.Router()


router.get('/generate-secret', (req, res) => {
  // save secret and uri on db
  var secret = speakeasy.generateSecret({ length: 20 })
  res.json({ secret: secret.base32, uri: secret.otpauth_url }) //dont return
})

router.post('/uri', (req, res) => {
  // get uri from db
  let uri = ''
  res.json({ uri })
})

router.get('/debug', (req, res) => {
  let secret = req.body.secret
  let token = speakeasy.totp({
    secret: secret,
    encoding: 'base32'
  })
  res.json({ token })
})

router.post('/validate', (request, response, next) => {
  //get secret from db
  let secret = ''
  response.json({
    valid: speakeasy.totp.verify({
      secret: request.body.secret,
      encoding: 'base32',
      token: request.body.token,
      window: 0
    })
  })
})
