const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, "Token secret", (err, decodedToken) => {
            
            if(err) {
                console.log(err.message);
                res.json({
                    message: "un-authorized access",
                })
            }else {
                console.log(decodedToken);
                next();
            }
        });
    } else {
        res.json({
            message: "un-authorized access",
        })
    }
};

module.exports = { requireAuth };