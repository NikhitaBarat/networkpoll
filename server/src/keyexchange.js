const crypto = require('crypto')

const alice = crypto.createDiffieHellman(1024);

alice.generateKeys();
let key_exchange_arguments = {
    prime_number: null,
    primitive_root: null,
    x_of_a: null,
    y_of_a: null,
}

key_exchange_arguments.prime_number = alice.getPrime().toString('hex')
key_exchange_arguments.primitive_root = alice.getGenerator().toString('hex')
key_exchange_arguments.x_of_a = alice.getPrivateKey().toString('hex')
key_exchange_arguments.y_of_a = alice.getPublicKey().toString('hex')


const PrivateKey = key_exchange_arguments.x_of_a;
const PublicKey = key_exchange_arguments.y_of_a;

module.exports = { PrivateKey, PublicKey }