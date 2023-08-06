from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin

# creating a Flask app
app = Flask(__name__)
CORS(app)
  
@app.route('/', methods = ['GET', 'POST'])
def home():
    if(request.method == 'GET'):
  
        data = "hello world"
        return jsonify({'data': data})
  

@app.route('/line', methods = ['GET'])
def line():
    data = [
        { 1: 200, 2: 260, 3: 340, 4: 400, 5: 375, 6: 350, 7: 325, 8: 300, 9: 275, 10: 250, 11: 225, 12: 200, 13: 212, 14: 225, 15: 238, 16: 250, 17: 275, 18: 300, 19: 284, 20: 268, 21: 252, 22: 236, 23: 220, 24: 245, 25: 270, 26: 295, 27: 320, 28: 345, 29: 395, 30: 420 },
        { 1: 100, 2: 160, 3: 240, 4: 300, 5: 375, 6: 420, 7: 375, 8: 300, 9: 275, 10: 240, 11: 200, 12: 170, 13: 212, 14: 252, 15: 292, 16: 335, 17: 375, 18: 400, 19: 370, 20: 340, 21: 310, 22: 280, 23: 240, 24: 210, 25: 180, 26: 200, 27: 200, 28: 220, 29: 240, 30: 250 }
    ]
    return jsonify(data)

@app.route('/pie', methods = ['GET'])
def pie():
    data = { 'Basic Tees': 55, 'Custom Short Pants': 31, 'Super hoodies': 14 }
    return jsonify(data)
  
  
# driver function
if __name__ == '__main__':
  
    app.run(debug = True)
