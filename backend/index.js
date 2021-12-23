const connectToMongo = require('./db.js')
const express = require('express')

connectToMongo();
var cors = require('cors')
const app = express()

app.use(cors())
const port = 5000

app.use(express.json())

app.use('/api/auth' , require('./routes/auth'))
app.use('/api/notes' , require('./routes/notes'))

app.listen(port, () => {
  console.log(`MyNotebook backend listening at http://localhost:${port}`)
})