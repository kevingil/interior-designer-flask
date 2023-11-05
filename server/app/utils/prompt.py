#Process interior design prompt
#Takes json request as input
def generate_prompt(req):
    
    room_type = req.get('roomType').lower()
    cabinet_color = req.get('cabinetColor').lower()
    hardware_finish = req.get('hardwareFinish').lower()
    style = req.get('style').lower()
    number_of_images = req.get('numberOfImages')

    combined_values = f"A sunlit {room_type} with all its furnishings, including {cabinet_color} flat surface cabinet doors and {hardware_finish} cabinet knobs and pulls in a {style} design style. Modern marble countertops, no lens distortion. Embedded appliances. Full kitchen island, large window over sink, open area. Wall to wall, wide angle view, 3 corners in view."
    qty = int(number_of_images)
    try:
        qty = int(number_of_images)
    except ValueError:
        print("Invalid? Set to 1.")
        qty = 1

    response = {
        'prompt': combined_values,
        'qty': qty
    }

    return response
