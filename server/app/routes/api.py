from flask import Blueprint, request, jsonify
import openai
import os
from dotenv import load_dotenv

load_dotenv()

openai.api_key = os.getenv("OPENAI_API_KEY")

api = Blueprint('api', __name__)

# /api/ping
@api.route("/ping", methods=['GET'])
def return_home():
    return jsonify({
        'message': "Connected to server",
        'array': ['1', '2', '3 testing...']
    })

# /api/generate
@api.route("/generate", methods=['POST'])
def generate_image():
    data = request.get_json()

    if 'prompt' not in data:
        print(data)
        return jsonify({'error': 'Missing "prompt" in the JSON request'}), 400

    prompt = data['prompt']

    try:
        response = openai.Completion.create(
            engine="image-alpha-001",
            prompt=prompt,
            max_tokens=100
        )

        generated_image = response.choices[0].text

        return jsonify({'image': generated_image})
    except Exception as e:
        return jsonify({'error': f'Failed to generate image: {str(e)}'}), 500
