const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.json({
        msg: "dhivya sending message to backend"
    })
})
app.listen(3000);
