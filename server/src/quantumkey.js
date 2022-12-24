const kyber = require('crystals-kyber');

// To generate a public and private key pair (pk, sk)
let pk_sk = kyber.KeyGen1024();
let pk = pk_sk[0];
let sk = pk_sk[1];

console.log(pk)
console.log(sk)

// To generate a random 256 bit symmetric key (ss) and its encapsulation (c)
let c_ss = kyber.Encrypt1024(pk);
let c = c_ss[0];
let ss1 = c_ss[1];

console.log(c)
console.log(ss1)

// To decapsulate and obtain symmetric key
let ss2 = kyber.Decrypt1024(c, sk);
console.log(ss2)
// buffers module provides a way of handling streams of binary data.
let buf1 = Buffer.from(ss1)
let buf2 = Buffer.from(ss2)

console.log(buf1.equals(buf2))

module.exports = {
    buf1, 
    buf2
}