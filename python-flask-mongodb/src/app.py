from types import MethodDescriptorType
from flask import Flask, json, request, jsonify, Response
from flask_pymongo import PyMongo
from werkzeug.security import generate_password_hash, check_password_hash
from bson import json_util
from bson.objectid import ObjectId

app = Flask(__name__)
app.config['MONGO_URI']='mongodb://localhost/pythonmongodb'

mongo = PyMongo(app)


@app.route('/users', methods=['GET'])
def get_users():
    # Method to collect all the users data
    users = mongo.db.users.find()
    # Transform the users data in json file "binary json"
    response = json_util.dumps(users)
    return Response(response, mimetype='application/json')


@app.route('/users/<id>', methods=['GET'])
def get_user(id):
    # Receiving one user
    user = mongo.db.users.find_one({'_id': ObjectId(id)})
    response = json_util.dumps(user)
    return Response(response, mimetype='application/json')


@app.route('/users', methods=['POST'])
def create_user():
    # Receiving data
    username = request.json['username']
    password = request.json['password']
    email = request.json['email']

    if username and password and email:
        hashed_password = generate_password_hash(password)
        id = mongo.db.users.insert_one(
            {'username': username,
            'email': email,
            'password': hashed_password
            }
        )
        response = {
            'id': str(id),
            'username': username,
            'email': email,
            'password': hashed_password
        }
        return response
    else:
        return not_found()


@app.route('/users/<id>', methods=['DELETE'])
def delete_user(id):
    # Delete user
    mongo.db.users.delete_one({'_id': ObjectId(id)})
    message = jsonify({'message ': 'User ' + id + ' deleted succesfully'})
    return message


@app.route('/users/<id>', methods=['PUT'])
def update_user(id):
    # Update user
    username = request.json['username']
    email = request.json['email']
    password = request.json['password']

    if username and email and password:
        hashed_password = generate_password_hash(password)
        mongo.db.users.update_one({'_id': ObjectId(id)}, {'$set': {
        'username': username,
        'password': hashed_password,
        'email': email,
        }})
        response = jsonify({'message': 'User ' + id + 'was updated succesfully'})
        return response

@app.errorhandler(404)
def not_found(error=None):
    # Method to handle with 404 status code
    response = jsonify({
        'message': 'Resource not found: ' + request.url,
        'status': 404
    })
    response.status_code = 404
    return response

if __name__ == "__main__":
    app.run(debug=True)
