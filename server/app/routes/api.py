from flask import Blueprint, request, jsonify
from flask_cors import CORS
from ..utils.prompt import generate_prompt

api = Blueprint('api', __name__)
CORS(api)

# /api/ping
@api.route("/ping", methods=['GET'])
def return_home():
    return jsonify({
        'message': "Server Online"
    })

# /api/generate
@api.route("/generate", methods=['POST'])
def generate_image():
    data = request.get_json()

    if 'prompt' not in data:
        print(data)
        return jsonify({'error': 'Missing "prompt" in the JSON request'}), 400
    

@api.route("/generate_test", methods=['POST'])
def generate_test():
    data = request.get_json()

    if data is None:
        return jsonify({'error': 'No JSON data provided in the request'}), 400
    
    test  = generate_prompt(data)

    return jsonify(test)

