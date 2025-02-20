const mongoose = require('mongoose')

const dB = 'mongodb://localhost:27017/studentDB'

mongoose.connect(dB)
.then(() => {
  console.log('Successfully connected to studentDB');
})
.catch((err) => {
  console.error('Error connecting to the database', err);
})
