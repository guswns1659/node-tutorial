const express = require('express')
const app = express()
const port = 3000

const moongoose = require('mongoose')
moongoose.connect('mongodb+srv://jack:12345@boilerpalte.esksy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', err => {
    if (err) console.log(err);
    console.log('Connected to MongoDB!!!')
})

// jack / 12345
//

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})