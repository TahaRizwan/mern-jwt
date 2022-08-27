import express from 'express'
import 'dotenv/config'

// Express App
const app = express()

const PORT = process.env.PORT || 5000

// ROUTES
app.get('/', (req, res) => {
  res.json({ msg: 'Welcome on board' })
})

// LISTENING FOR REQUEST
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`)
})
