const express = require('express')
const app = express()

app.get('/user/:name', (req, res) => {
    const name = req.params.name
    res.send(`Hello, ${name}!`)
})

const port = 4000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})
