const mongoose = require('mongoose')
const URI = 'mongodb://localhost/parking-db'
mongoose
  .connect(URI, { useNewUrlParser: true, useFindAndModify: false })
  .then(db => console.log('DB is connected'))
  .catch(err => console.error('Error: \n' + err.message))

module.exports = mongoose
