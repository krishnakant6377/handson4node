const express = require("express")
const app = express()
const cors = require("cors")


const studentrouter = require("./routes")
app.use(cors({origin:"*"}))
app.use(express.json())
app.get("/", (request, response) => {
    response.send("heii hiiiiiiiiiiiiiiiiiiiii")
})


app.use(studentrouter)

app.listen(4001, console.log("working"))