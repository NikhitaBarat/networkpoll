const kyber = require('crystals-kyber');

// To generate a public and private key pair (pk, sk)
var start = Date.now()
let i = 0
while ( i < 10000){

    var pk_sk = kyber.KeyGen1024();
    var pk = pk_sk[0];
    var sk = pk_sk[1];
    
    console.log(pk)
    console.log(sk)
    
    // To generate a random 256 bit symmetric key (ss) and its encapsulation (c)
    var c_ss = kyber.Encrypt1024(pk);
    var c = c_ss[0];
    var ss1 = c_ss[1];
    
    console.log(c)
    console.log(ss1)
    
    // To decapsulate and obtain symmetric key
    var ss2 = kyber.Decrypt1024(c, sk);
    console.log(ss2)
    // buffers module provides a way of handling streams of binary data.
    var buf1 = Buffer.from(ss1)
    var buf2 = Buffer.from(ss2)
    
    console.log(buf1.equals(buf2))
    i++
}
var timeTaken = Date.now() - start 
console.log("-------------------------------------")
console.log("No. of Generations: ", i)
console.log("timeTaken: ", timeTaken, "ms")

module.exports = {
    buf1, 
    buf2
}