const express = require('express')
require('dotenv').config()
const cors = require('cors')
const fs = require('fs')
const jwt = require('jsonwebtoken')
const { PrivateKey, PublicKey } = require('./src/keyexchange')
const Prometheus = require('prom-client')
const router = require('./routes/voter.routes')
// server configurations
const PORT = process.env.PORT || 5000
const app = express()

// middleware
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Server running perfectly')
})

app.get('/secret', isAuthorized, (req, res) => {
    res.json({ 
        "message" : "Secret keys",
        "private_key": PrivateKey,
        "public_key": PublicKey 
    })
})

app.get('/jwt', (req, res) => {
    let privateKey = fs.readFileSync('./private.pem', 'utf8');
    let token = jwt.sign({ "body": "stuff" }, privateKey, { algorithm: 'HS256'});
    res.send({
        "token": token
    });
})

function isAuthorized(req, res, next) {
    if (typeof req.headers.authorization !== "undefined") {
        // retrieve the authorization header and parse out the
        // JWT using the split function
        let token = req.headers.authorization.split(" ")[1];
        let privateKey = fs.readFileSync('./private.pem', 'utf8');
        // Here we validate that the JSON Web Token is valid and has been 
        // created using the same private pass phrase
        jwt.verify(token, privateKey, { algorithm: "HS256" }, (err, user) => {
            
            // if there has been an error...
            if (err) {  
                // shut them out!
                res.status(500).json({ error: "Not Authorized" });
            }
            // if the JWT is valid, allow them to hit
            // the intended endpoint
            return next();
        });
    } else {
        // No authorization header exists on the incoming
        // request, return not authorized
        res.status(500).json({ error: "Not Authorized" });
    }
}

// const collectDefaultMetrics  = Prometheus.collectDefaultMetrics;
// collectDefaultMetrics({ timeout: 5000 });
const register = Prometheus.Registry;
Prometheus.collectDefaultMetrics({ register })
app.use('/api', router)


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})