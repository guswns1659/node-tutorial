const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const {User} = require("./model/User")
const moongoose = require('mongoose')
const config = require('./config/key')
const cookieParser = require('cookie-parser')

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))
// application/json
app.use(bodyParser.json())

moongoose.connect(config.mongoURL, err => {
    if (err) console.log(err);
    console.log('Connected to MongoDB!!!')
})

// jack / 12345

// hello
app.get('/api/hello', (req, res) => {
    res.send('Hello!!')
})

// welcome
app.get('/api', (req, res) => {
    res.send('Hello World!!!!!!!')
})

// test
app.get('/api/hello', ((req, res) => {
        res.send('Hello!!!')
    }
))

// register
app.post('/api/users/register', ((req, res) => {

    const user = new User(req.body);
    // 암호화
    user.save((err, userInfo) => {
        if (err) return res.json({success: false, err})
        return res.status(200).json({
            body: userInfo,
            success: true
        })
    })
}))

// login
app.post('/api/users/login', ((req, res) => {
    // find email in DB
    User.findOne({email: req.body.email}, (err, user) => {
        if (!user) {
            return res.json({
                loginSuccess: false,
                message: "There is no user matched with requested email"
            })
        }

        // check whether requested password is equal with password of DB
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch) {
                return res.json({
                    loginSuccess: false, message: "Wrong Password"
                })
            }

            // create token if requested password is correct
            user.genToken((err, user) => {
                if (err) return res.status(400).send(err)

                // save token at cookie
                res.cookie('x_auth', user.token)
                    .status(200)
                    .json({
                        loginSuccess: true,
                        userid: user._id
                    })
            })
        })
    })
}))

const port = 5000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})