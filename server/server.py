from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
import os
from dotenv import load_dotenv

load_dotenv()

openai.api_key = os.getenv("OPENAI_API_KEY")

# app instance
app = Flask(__name__)
CORS(app)

# /api/home
@app.route("/api/ping", methods=['GET'])
def return_home():
    return jsonify({
        'message': "Backend works",
        'array': ['1', '2', '3 testing...']
    })

# /api/generate_render
@app.route("/api/generate_render", methods=['POST'])
def generate_image():
    data = request.get_json() 

    if 'prompt' not in data:
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

if __name__ == "__main__":
    app.run(debug=True, port=8080)
