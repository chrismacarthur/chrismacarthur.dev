require("dotenv").config() // Loads environment variables from .env.

/**
 * IMPORTS
 */
const express = require("express") 
path = require("path") // Node.js file/directory system module.
const app = express() // Express.js instance.
const http = require("http")
const https = require("https")
const fs = require("fs") // Node.js file system API.


/**
 * ENDPOINTS
 */

// Connects path to frontend (where index.html will be found and served by default).
app.use(express.static(path.join(__dirname, "..", "frontend")));

// Connects path to the required React dependencies that will be utilized in the front end.
app.use("/backend/node_modules/react/umd/react.production.min.js", express.static(path.join(__dirname, "node_modules/react/umd/react.production.min.js")));
app.use("/backend/node_modules/react-dom/umd/react-dom.production.min.js", express.static(path.join(__dirname, "node_modules/react-dom/umd/react-dom.production.min.js")));

// Sample endpoint TBD.
app.get("/hi", (req, res) => { 
  let message = "hi buddy :)"
  //message += req.query.name
  res.send(message)
})


// For unrecognized GET requests, serve 404.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "404.html"));
});



/**
 * INITIATION
 */

// Initiates the server: HTTP for PROD, HTTPS for DEV.
let server, port;
if (process.env.NODE_ENV === "production") {
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

// Listen on the preferred port, depending on PROD or DEV.
server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});