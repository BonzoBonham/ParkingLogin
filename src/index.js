const crypto = require('crypto-js')
const auth = require('google-auth-library')
const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.set('port', process.env.PORT || 3000)

app.use(express.static(path.join(__dirname, 'public')))

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`)
})
