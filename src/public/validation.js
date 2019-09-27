// const api = require('../routes/api')

function submitHandler(e) {
  fetch('api/users', {
    method: 'GET',
    body: JSON.stringify('{ message: "aber"  }'),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error('Error:: ' + err))

  // e.preventDefault()
}
