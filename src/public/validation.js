const qrcode = require("qrcode");
const speakeasy = require("speakeasy");

var secret = speakeasy.generateSecret({ length: 20 })
var Token = ''

qrcode.toDataURL(secret.otpauth_url, function (err, image_data) {
  document.getElementById("image").src = image_data
})
// const api = require('../routes/api')

function submitHandler() {
  fetch('api/users')
    .then(res => res.json())
    .then(data => console.log(data))
}

