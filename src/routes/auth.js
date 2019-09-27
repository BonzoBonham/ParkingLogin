const Express = require('express')
const BodyParser = require('body-parser')
const speakeasy = require('speakeasy')
const path = require('path')
var QRCode = require('qrcode')

var app = Express()

app.use(BodyParser.json())
app.use(BodyParser.urlencoded({ extended: true }))

app.get('/generate-secret', (req, res) => {
  // save secret and uri on db
  var secret = speakeasy.generateSecret({ length: 20 })
  res.json({ secret: secret.base32, uri: secret.otpauth_url }) //dont return
})

app.post('/uri', (req, res) => {
  // get uri from db
  let uri = ''
  res.json({ uri })
})

app.get('/debug', (req, res) => {
  let secret = req.body.secret
  let token = speakeasy.totp({
    secret: secret,
    encoding: 'base32'
  })
  res.json({ token })
})

app.post('/validate', (request, response, next) => {
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

app.use(Express.static(path.join(__dirname, 'public')))

app.listen(3000, () => {
  console.log('Listening at :3000...')
})
