// const sha256 = require('crypto-js/sha256');
const { createHash } = require('crypto')

const Hashing = (string) => {
    return createHash('sha256').update(string).digest('hex');
};

module.exports = Hashing;


