require('dotenv').config()

// app module
const app = require('./App')

// server port
const port = process.env.PORT || 8080

// database config
const mongoose = require('mongoose')
mongoose.connect(
    process.env.DB_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).catch(err => 
    console.log(`Database connection error: ${err}`))

// starting server
app.listen(port, () => console.log(`Server running at ${port}`))
