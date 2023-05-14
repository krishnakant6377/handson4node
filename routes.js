const express = require("express")
const router = express.Router()
const { login, signup } = require("./register")
const verification = require("./middleware")

const bollywood = (req, res) => {
    res.send([{
        "id": 1,
        "titlt": "rrr",
        "image": "image"
    },
    {
        "id": 2,
        "titlt": "rrr",
        "image": "image"
    },
    {
        "id": 3,
        "titlt": "rrr",
        "image": "image"
    }])

}
router.get("/bollywood",verification,bollywood)
router.post("/signup", signup)
router.post("/login", login)
module.exports = router