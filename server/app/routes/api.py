from flask import Blueprint, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv
from ..utils.prompt import generate_prompt
from ..utils.generate_image import generate_image
from ..utils.generate_image_test import generate_image_test



api = Blueprint('api', __name__)
CORS(api)

# /api/ping
@api.route("/ping", methods=['GET'])
def return_home():
    return jsonify({
        'message': "Server Online"
    })

# /api/generate
@api.route("/generate_render", methods=['POST'])
def generate_render():
    load_dotenv()
    openai_api_key = os.getenv("OPENAI_API_KEY")
    data = generate_prompt(request.get_json())
    prompt = data.get('prompt')
    qty = data.get('qty')
    size = 240

    if 'prompt' not in data:
        print(data)
        return jsonify({'error': 'Missing "prompt" in the JSON request'}), 400
    
    return generate_image(openai_api_key, prompt, qty, size)
    

@api.route("/generate_test", methods=['POST'])
def generate_test():
    data = request.get_json()
    load_dotenv()
    openai_api_key = os.getenv("OPENAI_API_KEY")
    if data is None:
        return jsonify({'error': 'No JSON data provided in the request'}), 400
    
    response  = generate_prompt(data)
    render_size = "1024x1024"
    render_test = generate_image_test(openai_api_key, response['prompt'], response['qty'], render_size)

    response['images'] = render_test['images']
    
    print(jsonify(response))
    return jsonify(response)

