from tinyec import registry
import secrets
import time

begin = time.time()*1000

def compress(pubKey):
    return hex(pubKey.x) + hex(pubKey.y % 2)[2:]
i = 0
print("***************************************************")
while i < 900:
    curve = registry.get_curve('brainpoolP256r1')

    print()
    alicePrivKey = secrets.randbelow(curve.field.n)
    alicePubKey = alicePrivKey * curve.g
    print("Alice public key:", compress(alicePubKey))

    bobPrivKey = secrets.randbelow(curve.field.n)
    bobPubKey = bobPrivKey * curve.g
    print("Bob public key:", compress(bobPubKey))

    print("Now exchange the public keys (e.g. through Internet)")

    aliceSharedKey = alicePrivKey * bobPubKey
    print("Alice shared key:", compress(aliceSharedKey))

    bobSharedKey = bobPrivKey * alicePubKey
    print("Bob shared key:", compress(bobSharedKey))

    print("Equal shared keys:", aliceSharedKey == bobSharedKey)
    end = time.time()*1000
    print()
    i+= 1
print("***************************************************")
print(f"Total times key generated: {i} times")
print(f"Total runtime of the program is: {end - begin}ms")

