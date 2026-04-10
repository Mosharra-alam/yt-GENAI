const express = require("express")
const cockieParser = require("cookie-parser")
const app = express()

app.use(express.json())
app.use(cockieParser())
 /* required all the routes here */
const authRouter = require("./routes/auth.routes.js")

/* use the routes here */
app.use("/api/auth", authRouter)


module.exports = app