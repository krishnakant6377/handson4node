const secretkey = "kkverma"
const jwt = require("jsonwebtoken")
const verification = (req, res, next) => {
    const bearertoken = req.header["Authorization"]
    if (bearertoken == undefined) {
        return res.send({ mgs: "unauthorized person " })
    }
    const token = bearertoken.split(" ")[1]
    jwt.verify(token, secretkey)
 
    next()

}
module.exports = verification