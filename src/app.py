from flask import Flask
# from modules import keys
from modules.key_generator import aliceSharedKey, bobSharedKey, compress
app = Flask(__name__)

datas = {'sharedkey_1' : str(compress(aliceSharedKey)),'sharedkey_2'  : str(compress(bobSharedKey)),}


@app.route("/")
def home():
  return "Hello World!"

@app.route("/keys", methods=['GET'])
def keyGenerator():
  return datas

if __name__ == "__main__":
  app.run()