#Process interior design prompt
#Takes json request as input
def generate_prompt(req):
    
    room_type = req.get('roomType').lower()
    cabinet_color = req.get('cabinetColor').lower()
    hardware_finish = req.get('hardwareFinish').lower()
    style = req.get('style').lower()
    number_of_images = req.get('numberOfImages')
    
    #Additional
    addon_prompt = ''
    if room_type == 'kitchen':
        addon_prompt = f'Modern marble countertops, Embedded appliances.  Kitchen island, large window over sink.  With {cabinet_color} flat surface cabinet doors and {hardware_finish} cabinet hardware. Full kitchen interior design render'
    if room_type == 'living room':
        addon_prompt = f' with couch, TV, {cabinet_color} media console and big window. Full living room interior design render.'
    if room_type == 'bath':
        addon_prompt = f'Large mirror and windows. {cabinet_color} vanity cabinets Full bathroom interior design render.'

    combined_values = f"A sunlit {room_type} in a {style} design style, {addon_prompt}"
    qty = int(number_of_images)
    try:
        qty = int(number_of_images)
    except ValueError:
        print("Invalid? Set to 1.")
        qty = 1
        
    print(room_type)
    response = {
        'prompt': combined_values,
        'qty': qty,
        'room': room_type,
    }

    return response
