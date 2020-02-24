from flask import Flask, jsonify
from flask_json_schema import JsonSchema
from flask_cors import CORS,cross_origin
from flask import render_template

app = Flask(__name__)
cors = CORS(app)


todos =[
    {
        'id':1,
        'title':'landry',
        'done':False
        
    },
    {
        'id':2,
        'title':'cooking',
        'done':False
        
    },
    {
        'id':3,
        'title':'coding',
        'done':True
        
    }
]

@app.route('/',methods=['GET'])
@cross_origin()
def get_todos():
    return jsonify({'todos':todos})
@app.route('/index',methods=['GET'])
@cross_origin()
def get_index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
