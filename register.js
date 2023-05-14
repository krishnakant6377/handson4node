const arr = []
const saltround = 10
const secretkey = "kkverma"
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const signup = async (req, res) => {
    const details = req.body
    const user = arr.find((item) => {
        return details.email == item.email
    })
    if (user) {
        return res.status(200).send({ msg: "user already exits pls try to login " })
    }
    const hashpassword = await bcrypt.hash(details.password, saltround)
    const obj = {
        name: details.name,
        phone: details.phone,
        email: details.email,
        password: hashpassword
    }
    arr.push(obj)
    console.log(arr)
    res.send(arr)
}


const login = async (req, res) => {
    const details = req.body
    const user = arr.find((item) => {
        console.log(item,"message")
        if (details.email == item.email) { return item }
        else { return res.status(200).send({ msg: "user is not exits pls try to register first " }) }
    })

    const validate = await bcrypt.compare(details.password, user.password)
    if (validate) {
        const token = await jwt.sign(user.email, secretkey)
        return res.send({ Token: token, mgs: "user logged in successful" })
    }
    return res.send("user password doesnt match")
}



module.exports = { login, signup }