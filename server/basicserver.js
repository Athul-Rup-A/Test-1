require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const express = require('express')
const app = express()
const routes = require('./routes/router')
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use('/routes/', routes)
mongoose.connect(process.env.URL).then(() => console.log("MongoDB CONNECTED"))
    .catch((err) => console.log(err, "MongoDB ERROR"))

// app.get('/', (req, res) => {
//     res.json({ message: 'This is the root route' })
// })

// app.get('/welcome', (req, res) => {
//     res.json({message : "Welcome to Express!"})
// })

// app.get('/user/:name', (req, res) => {
//     const name = req.params.name
//     res.send(`Hello, ${name}!`)
// })

app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
})
