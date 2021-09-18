const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const {User} = require("./model/User")
const moongoose = require('mongoose')

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))
// application/json
app.use(bodyParser.json())

moongoose.connect('mongodb+srv://jack:12345@boilerpalte.esksy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', err => {
    if (err) console.log(err);
    console.log('Connected to MongoDB!!!')
})

// jack / 12345

app.get('/', (req, res) => {
    res.send('Hello World!!!!!!!')
})

app.post('/register', ((req, res) => {

    const user = new User(req.body);
    user.save((err, userInfo) => {
        if(err) return res.json({ success: false, err})
        return res.status(200).json({
            body: userInfo,
            success: true
        })
    })
}))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})