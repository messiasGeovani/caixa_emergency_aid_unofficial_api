require('dotenv').config

// app module
const app = require('express')()

// server port
const port = process.env.PORT || 8080

app.get('', (req, res) => res.send('Hello men!'))

// starting server
app.listen(port, () => console.log(`Server running at ${port}`))
