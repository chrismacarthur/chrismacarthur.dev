require("dotenv").config()
const express = require("express") 
const app = express()
const http = require("http")
const https = require("https")
const fs = require("fs")

app.get("/", (req, res) => { 
    let message = "hi buddy "
    message += req.query.name
    res.send(message)
})

//--------------------------------------//
//        STARTING THE SERVER           //
//--------------------------------------//

// Create either a HTTPS or HTTP server
let server, port;
if (process.env.NODE_ENV === 'production') {
	const credentials = { // SSL certificate
		key: fs.readFileSync(process.env.SSL_PRIVATE_KEY),
		cert: fs.readFileSync(process.env.SSL_CERT)
	}
	server = https.createServer(credentials, app);
	port = process.env.PORT_PROD;
} else {
	server = http.createServer(app);
	port = process.env.PORT_DEV;
}

// Listen on a specific port.
server.listen(port, () => {
	console.log(`Server started on port ${port}`);
});