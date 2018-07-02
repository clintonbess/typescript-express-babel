import express from 'express'
import { Server, Request, Response } from 'express'

const port = 8000
const app: Server = express()

app.get('/', function (req: Request, res: Response) {
  res.send('test')
})

app.listen(port, function () {
  console.log(`Listening on port ${port}`)
})
