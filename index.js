const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const session = require("express-session")
const KnexSessionStore = require("connect-session-knex")(session)
const db = require("./data/config")
const usersRouter = require("./users/router")

const server = express()
const port = process.env.PORT || 5000

server.use(helmet())
server.use(cors())
server.use(express.json())
server.use(session({
    resave: false,
    saveUninitialized: false,
    secret: "hello555",
    store: new KnexSessionStore({
        knex: db,
        createtable: true,
    }),
}))

server.use(usersRouter)

server.use((err, req, res, next) => {
    console.log(err)

    res.status(500).json({
        message: "Something went wrong",
    })
})

server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
})