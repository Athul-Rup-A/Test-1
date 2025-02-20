const express = require('express')
const app = express()

app.use((req, res, next) => {
  console.log(`Method: ${req.method}, URL: ${req.url}`);
  next()
})

app.get('/', (req, res) => {
  res.send('Hello, World!')
})

app.listen(3000, () => {
  console.log('Server running at port 3000');
})
