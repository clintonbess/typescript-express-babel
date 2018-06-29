import express from 'express'

const port = 8000
const app = express()

app.get('/', function (req, res) {
  res.send('test')
})

app.listen(port, function () {
  console.log(`Listening on port ${port}`)
})
