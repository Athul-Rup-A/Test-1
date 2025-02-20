const express = require('express')
const router = express.Router()

router.post('/postData', (req, res) => {
    try {
        const data = [req.body]
        console.log(data);
        
    } catch (error) {
        console.log(error);
        
    }
})

module.exports = router
