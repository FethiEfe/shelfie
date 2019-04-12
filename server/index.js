require("dotenv").config()
const express = require("express");
const massive = require("massive")
const {getAll, create, Delete, update} = require("./controller")

const app = express()

const {PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set("db", dbInstance)
})
.catch(err => console.log(err))

app.use(express.json())

app.get("/api/inventory", getAll)

app.post("/api/inventory" , create)

app.delete("/api/inventory/:id", Delete)

app.put("/api/inventory/:id", update)





app.listen(PORT, () => {
    console.log(`I am listening ${PORT}`)
})