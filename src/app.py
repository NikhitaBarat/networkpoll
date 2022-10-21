from flask import Flask
# from modules import keys
app = Flask(__name__)

# error point
# datas = {'var1' : str(keys.aliceSharedKey),'var2'  : str(keys.bobSharedKey),}
datas = {'var1' : 'Key1','var2'  : 'Key2',}

@app.route("/")
def home():
  return "Hello World!"

@app.route("/keys", methods=['GET'])
def keyGenerator():
  return datas

if __name__ == "__main__":
  app.run()