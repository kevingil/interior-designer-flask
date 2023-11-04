import openai
from flask import jsonify

#Same as generate_image but returns a python list
def generate_image_test(api_key, prompt, qty, size):
    openai.api_key = api_key
    
    #Just in case because credits are expensive
    if (qty > 4):
        qty = 1

    try:
        responses = []
        for _ in range(qty):
            response = openai.Image.create(
                prompt=prompt,
                n=1,
                size=size
            )
            image_url = response['data'][0]['url']
            responses.append(image_url)

        return {'images': responses} 
    except Exception as e:
        return {'error': f'Failed to generate images: {str(e)}'}  
