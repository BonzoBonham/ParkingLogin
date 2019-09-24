
// const api = require('../routes/api')

function submitHandler() {
  fetch('api/users')
    .then(res => res.json())
    .then(data => console.log(data))
}

