const express = require('express')
const app = express()

const PORT = 2000

app.use(express.json())

let users = []

app.post('/add-user', (req, res) => {
    const { name, email } = req.body

    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' })
    }

    const user = { name, email };
    users.push(user)

    res.status(201).json(user);
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})
