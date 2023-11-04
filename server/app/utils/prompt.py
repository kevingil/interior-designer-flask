#Process interior design prompt
def generate_prompt(req):
    
    room_type = req.get('roomType')
    cabinetry_style = req.get('cabinetryStyle')
    cabinet_color = req.get('cabinetColor')
    hardware_finish = req.get('hardwareFinish')
    style = req.get('style')
    number_of_images = req.get('numberOfImages')

    combined_values = f"A sunlit {room_type} with {cabinet_color} {cabinetry_style} and {hardware_finish} cabinet hardware in a {style} design style"
    qty = f"{number_of_images}"

    response = {
        'prompt': combined_values.lower(),
        'qty': qty
    }

    return response
