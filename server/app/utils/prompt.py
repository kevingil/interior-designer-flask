#Process interior design prompt
def generate_prompt(req):
    
    room_type = req.get('roomType')
    cabinetry_style = req.get('cabinetryStyle')
    cabinet_color = req.get('cabinetColor')
    hardware_finish = req.get('hardwareFinish')
    style = req.get('style')
    number_of_images = req.get('numberOfImages')

    combined_values = f"{room_type} {cabinetry_style} {cabinet_color} {hardware_finish} {style} {number_of_images}"

    response = {
        'combinedValues': combined_values,
    }

    return response
