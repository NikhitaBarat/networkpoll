const jwt = require('jsonwebtoken');


// jsonwebtoken
const maxAge = 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, 'secret', {
        expiresIn: maxAge
    })
}

module.exports = createToken;