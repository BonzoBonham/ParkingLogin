const crypto = require('crypto-js')
const auth = require('google-auth-library')
const express = require('express')
const path = require('path')
const { mongoose } = require('./database')

const app = express()

app.set('port', process.env.PORT || 6969)
app.set('views', path.join(__dirname, 'public'))

app.use(express.json())

app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))

app.use(express.static(path.join(__dirname, 'public')))

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`)
})
