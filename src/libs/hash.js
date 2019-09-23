const crypto = require('crypto')

module.exports = {
  createPasswordHash: function(plainPassword) {
    var hashed = crypto
      .createHash('sha256')
      .update(plainPassword)
      .digest('hex')
    console.log(hashed)
  }
}

// createPasswordHash('admin')
// createPasswordHash('loca')
