const crypto = require('crypto')
const hash = crypto.createHash('sha256')

// hash.update('holi')
// console.log(hash.digest('hex'))

module.exports = {
  createPasswordHash: function(plainPassword) {
    var hash = crypto
      .createHash('sha256')
      .update(pwd)
      .digest('base64')
    console.log(hash)
  }
}
