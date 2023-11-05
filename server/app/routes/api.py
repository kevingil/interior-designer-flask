from flask import Blueprint, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv
from ..utils.prompt import generate_prompt
from ..utils.generate_image import generate_image
from ..utils.generate_image_test import generate_image_test
from ..utils.r2 import upload_to_r2
from ..utils.gallery import *
import time


api = Blueprint('api', __name__)
CORS(api)

# /api/ping
@api.route("/ping", methods=['GET'])
def return_home():
    return jsonify({
        'message': "Server Online"
    })
    
# /api/gallery_latest
@api.route("/gallery_latest", methods=['GET'])
def return_gallery_latest():
    return get_latest_renders(10)

# /api/generate_render
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
    
# /api/generate_render_test
@api.route("/generate_test", methods=['POST'])
def generate_test():
    data = request.get_json()
    load_dotenv()
    openai_api_key = os.getenv("OPENAI_API_KEY")
    cloudflare_account_id = os.getenv("CLOUDFLARE_ACCOUNT_ID")
    r2_access_key_id = os.getenv("R2_ACCESS_KEY_ID")
    r2_secret_access_key = os.getenv("R2_SECRET_ACCESS_KEY")
    if data is None:
        return jsonify({'error': 'No JSON data provided in the request'}), 400
    
    start_time = time.time()
    
    response  = generate_prompt(data)
    render_size = "1024x1024"
    render_test = generate_image_test(openai_api_key, response['prompt'], response['qty'], render_size)
    
    end_time = time.time()
    render_time = end_time - start_time

    response['images'] = render_test['images']
    uploaded_images = upload_to_r2(cloudflare_account_id, r2_access_key_id, r2_secret_access_key, "cdn", "interiordesigner/", response['images'])
    print(uploaded_images)
    update_gallery(render_time, "OpenAI", uploaded_images)
        
    print(jsonify(response))
    return jsonify(response)

