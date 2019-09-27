const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  secret32: {
    type: String,
    required: true
  },
  uri: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('User', UserSchema)
