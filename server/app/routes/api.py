from flask import Blueprint, request, jsonify
from flask_cors import CORS
from ..utils.prompt import generate_prompt
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
    return get_latest_renders(16)
    
# /api/generate_render_test
@api.route("/generate_test", methods=['POST'])
def generate_test():
    data = request.get_json()
    
    if data is None:
        return jsonify({'error': 'No JSON data provided in the request'}), 400
    
    start_time = time.time()
    
    response  = generate_prompt(data)
    render_size = "1024x1024"
    render_test = generate_image_test(response['prompt'], response['qty'], render_size, response['room'])
    
    end_time = time.time()
    render_time = end_time - start_time
    
    #If images where generated
    if 'images' in render_test:
        response['images'] = render_test['images']
        uploaded_images = upload_to_r2("interiordesigner/", response['images'])
        print(uploaded_images)
        update_gallery(render_time, "OpenAI", uploaded_images)
    else:
        print(render_test)
        
    print(jsonify(response))
    return jsonify(response)

