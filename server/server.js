const express = require('express')
require('dotenv').config()
const cors = require('cors')

// server configurations
const PORT = process.env.PORT || 4000
const app = express()

// middleware
app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    res.send('Server running perfectly')
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})