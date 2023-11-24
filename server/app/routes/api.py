from flask import Blueprint, request, jsonify
from flask_cors import CORS
from flask_sslify import SSLify
from ..utils.prompt import generate_prompt
from ..utils.r2 import *
from ..utils.gallery import *
from ..utils.stability_text import *
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
    renders = get_latest_renders(16)
    return renders
    
# /api/generate_render_test
@api.route("/stability_generate_test", methods=['POST'])
def stability_generate_test():
    data = request.get_json()
    
    if data is None:
        return jsonify({'error': 'No JSON data provided in the request'}), 400
    
    start_time = time.time()
    # Image request
    imgreq  = generate_prompt(data)
    # Returns image bytes
    stability_renders = stability_text_to_image(imgreq['prompt'], imgreq['num'])
    end_time = time.time()
    render_time = round((end_time - start_time), 2)
    
    # Upload images where generated
    if (stability_renders):
        uploaded_images = upload_image_bytes("interiordesigner/", stability_renders)
        imgreq['images'] = uploaded_images
        update_gallery(render_time, "Stable Diffusion XL 1.0 ", uploaded_images)
    else:
        imgreq['error'] = 'Failed to generate'
    
    return jsonify(imgreq)
