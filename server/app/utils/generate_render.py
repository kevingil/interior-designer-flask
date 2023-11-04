from flask import jsonify
import openai
import os
from dotenv import load_dotenv
from ..utils.prompt import generate_prompt

load_dotenv()

openai.api_key = os.getenv("OPENAI_API_KEY")


def generate_render(data):
    prompt = data['prompt']
    img_qty = data['qty']

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
