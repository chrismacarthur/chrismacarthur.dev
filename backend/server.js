const express = require("express") 
const app = express()

app.get("/", (req, res) => { 
    let message = "hi buddy "
    message += req.query.name
    res.send(message)
})

app.listen(3000, () => {
    console.log("App is now running on port 3000")
})