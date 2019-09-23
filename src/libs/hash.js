const crypto = require('crypto')
const hash = crypto.createHash('sha256')

// hash.update('holi')
// console.log(hash.digest('hex'))

// module.exports = {
//   createPasswordHash:
function createPasswordHash(plainPassword) {
  var hashed = hash.update(plainPassword).digest('hex')
  console.log(hashed)
}
// }

createPasswordHash('admin')
