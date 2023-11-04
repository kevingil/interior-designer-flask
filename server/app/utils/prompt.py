#Process interior design prompt
#Takes json request as input
def generate_prompt(req):
    
    room_type = req.get('roomType').lower()
    cabinetry_style = req.get('cabinetryStyle').lower()
    cabinet_color = req.get('cabinetColor').lower()
    hardware_finish = req.get('hardwareFinish').lower()
    style = req.get('style').lower()
    number_of_images = req.get('numberOfImages')

    combined_values = f"Corner angle, full view of a sunlit {room_type} with {cabinet_color} {cabinetry_style} and {hardware_finish} cabinet hardware in a {style} design style"
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
