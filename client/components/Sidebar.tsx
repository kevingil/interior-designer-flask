import React, { useState, useEffect } from 'react';

function Sidebar(props: any) {

    const [ping_message, setMessage] = useState("Testing connection");

    useEffect(() => {
        fetch("http://localhost:8080/api/ping")
            .then((response) => response.json())
            .then((data) => {
                setMessage(data.message);
            })
            .catch((error) => {
                console.error('API error:', error)
                setMessage('API is offline')
            });
    }, []);


    const [formData, setFormData] = useState({
        roomType: 'Kitchen',
        cabinetryStyle: 'Flat slab doors',
        cabinetColor: 'Maple',
        hardwareFinish: 'Satin nickel',
        style: 'Standard',
        numberOfImages: '2',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
    
        try {
            const response = await fetch('http://localhost:8080/api/generate_test', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (response.ok) {
                const responseData = await response.json();
    
                if (responseData.combinedValues) {
                    const combinedValues = responseData.combinedValues;
                    props.updateResponse(combinedValues);
                    console.log('Combined Values:', combinedValues);
                } else {
                    console.error('API response does not contain combinedValues');
                }
            } else {
                console.error('API error:', response.statusText);
            }
        } catch (error) {
            console.error('API error:', error);
        }
    };
    

    return (
        <aside className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow p-4 sm:max-w-[300px]">
            <div className="">
                <h2>Your Room</h2>
                <span className="inline">{ping_message}</span>
                <div className="form">
                    <form onSubmit={handleSubmit} className=''>
                        <div>
                            <label className="block  mb-2">Room Type</label>
                            <div className="flex flex-row flex-wrap space-x-2">
                                <input
                                    type="radio"
                                    id="roomType_Kitchen"
                                    name="roomType"
                                    value="Kitchen"
                                    onChange={handleChange}
                                    className="hidden"
                                    checked={formData.roomType === 'Kitchen'}
                                />
                                <label
                                    htmlFor="roomType_Kitchen"
                                    className="flex flex-col p-2 border-2 border-gray-700 cursor-pointer m-1 rounded rounded hover:bg-gray-600"
                                >
                                    <span className="text-xs font-semibold uppercase">Kitchen</span>
                                </label>

                                <input
                                    type="radio"
                                    id="roomType_LivingRoom"
                                    name="roomType"
                                    value="Living Room"
                                    onChange={handleChange}
                                    className="hidden"
                                />
                                <label htmlFor="roomType_LivingRoom" className="flex flex-col p-2 border-2 border-gray-700 cursor-pointer m-1 rounded rounded hover:bg-gray-600">
                                    <span className="text-xs font-semibold uppercase">Living Room</span>
                                </label>
                                <input
                                    type="radio"
                                    id="roomType_Bath"
                                    name="roomType"
                                    value="Bath"
                                    onChange={handleChange}
                                    className="hidden"
                                />
                                <label htmlFor="roomType_Bath" className="flex flex-col p-2 border-2 border-gray-700 cursor-pointer m-1 rounded rounded hover:bg-gray-600">
                                    <span className="text-xs font-semibold uppercase">Bath</span>
                                </label>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">Cabinetry Style</label>
                            <div className="flex flex-row flex-wrap space-x-2">
                                <input
                                    type="radio"
                                    id="cabinetryStyle_FlatSlabDoors"
                                    name="cabinetryStyle"
                                    value="Flat slab doors"
                                    onChange={handleChange}
                                    className="hidden"
                                    checked={formData.cabinetryStyle === 'Flat slab doors'}
                                />
                                <label
                                    htmlFor="cabinetryStyle_FlatSlabDoors"
                                    className="flex flex-col p-2 border-2 border-gray-700 cursor-pointer m-1 rounded rounded hover:bg-gray-600"
                                >
                                    <span className="text-xs font-semibold uppercase">Flat slab doors</span>
                                </label>
                                <input
                                    type="radio"
                                    id="cabinetryStyle_ShakerDoors"
                                    name="cabinetryStyle"
                                    value="Shaker doors"
                                    onChange={handleChange}
                                    className="hidden"
                                />
                                <label
                                    htmlFor="cabinetryStyle_ShakerDoors"
                                    className="flex flex-col p-2 border-2 border-gray-700 cursor-pointer m-1 rounded rounded hover-bg-gray-600"
                                >
                                    <span className="text-xs font-semibold uppercase">Shaker doors</span>
                                </label>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">Cabinet Color or Material</label>
                            <div className=" flex flex-row flex-wrap">
                                <input
                                    type="radio"
                                    id="cabinetColor_Maple"
                                    name="cabinetColor"
                                    value="Maple"
                                    onChange={handleChange}
                                    className="hidden"
                                    checked={formData.cabinetColor === 'Maple'}
                                />
                                <label
                                    htmlFor="cabinetColor_Maple"
                                    className="flex flex-col p-2 border-2 border-gray-700 cursor-pointer m-1 rounded rounded hover-bg-gray-600"
                                >
                                    <span className="text-xs font-semibold uppercase">Maple</span>
                                </label>
                                <input
                                    type="radio"
                                    id="cabinetColor_DarkGray"
                                    name="cabinetColor"
                                    value="Dark Gray"
                                    onChange={handleChange}
                                    className="hidden"
                                />
                                <label
                                    htmlFor="cabinetColor_DarkGray"
                                    className="flex flex-col p-2 border-2 border-gray-700 cursor-pointer m-1 rounded rounded hover-bg-gray-600"
                                >
                                    <span className="text-xs font-semibold uppercase">Dark Gray</span>
                                </label>
                                <input
                                    type="radio"
                                    id="cabinetColor_White"
                                    name="cabinetColor"
                                    value="White"
                                    onChange={handleChange}
                                    className="hidden"
                                />
                                <label
                                    htmlFor="cabinetColor_White"
                                    className="flex flex-col p-2 border-2 border-gray-700 cursor-pointer m-1 rounded rounded hover-bg-gray-600"
                                >
                                    <span className="text-xs font-semibold uppercase">White</span>
                                </label>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">Hardware Finish</label>
                            <div className="flex flex-row flex-wrap space-x-2">
                                <input
                                    type="radio"
                                    id="hardwareFinish_PolishedChrome"
                                    name="hardwareFinish"
                                    value="Polished Chrome"
                                    onChange={handleChange}
                                    className="hidden"
                                />
                                <label
                                    htmlFor="hardwareFinish_PolishedChrome"
                                    className="flex flex-col p-2 border-2 border-gray-700 cursor-pointer m-1 rounded rounded hover-bg-gray-600"
                                >
                                    <span className="text-xs font-semibold uppercase">Polished Chrome</span>
                                </label>
                                <input
                                    type="radio"
                                    id="hardwareFinish_PolishedBrass"
                                    name="hardwareFinish"
                                    value="Polished Brass"
                                    onChange={handleChange}
                                    className="hidden"
                                />
                                <label
                                    htmlFor="hardwareFinish_PolishedBrass"
                                    className="flex flex-col p-2 border-2 border-gray-700 cursor-pointer m-1 rounded rounded hover-bg-gray-600"
                                >
                                    <span className="text-xs font-semibold uppercase">Polished Brass</span>
                                </label>
                                <input
                                    type="radio"
                                    id="hardwareFinish_SatinNickel"
                                    name="hardwareFinish"
                                    value="Satin Nickel"
                                    onChange={handleChange}
                                    className="hidden"
                                    checked={formData.hardwareFinish === 'Satin nickel'}
                                />
                                <label
                                    htmlFor="hardwareFinish_SatinNickel"
                                    className="flex flex-col p-2 border-2 border-gray-700 cursor-pointer m-1 rounded rounded hover-bg-gray-600"
                                >
                                    <span className="text-xs font-semibold uppercase">Satin Nickel</span>
                                </label>
                                <input
                                    type="radio"
                                    id="hardwareFinish_OilRubbedBronze"
                                    name="hardwareFinish"
                                    value="Oil Rubbed Bronze"
                                    onChange={handleChange}
                                    className="hidden"
                                />
                                <label
                                    htmlFor="hardwareFinish_OilRubbedBronze"
                                    className="flex flex-col p-2 border-2 border-gray-700 cursor-pointer m-1 rounded rounded hover-bg-gray-600"
                                >
                                    <span className="text-xs font-semibold uppercase">Oil Rubbed Bronze</span>
                                </label>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">Style</label>
                            <div className="flex flex-row flex-wrap space-x-2">
                                <input
                                    type="radio"
                                    id="style_Standard"
                                    name="style"
                                    value="Standard"
                                    onChange={handleChange}
                                    className="hidden"
                                    checked={formData.style === 'Standard'}
                                />
                                <label
                                    htmlFor="style_Standard"
                                    className="flex flex-col p-2 border-2 border-gray-700 cursor-pointer m-1 rounded rounded hover-bg-gray-600"
                                >
                                    <span className="text-xs font-semibold uppercase">Standard</span>
                                </label>
                                <input
                                    type="radio"
                                    id="style_Minimalist"
                                    name="style"
                                    value="Minimalist"
                                    onChange={handleChange}
                                    className="hidden"
                                />
                                <label
                                    htmlFor="style_Minimalist"
                                    className="flex flex-col p-2 border-2 border-gray-700 cursor-pointer m-1 rounded rounded hover-bg-gray-600"
                                >
                                    <span className="text-xs font-semibold uppercase">Minimalist</span>
                                </label>
                                <input
                                    type="radio"
                                    id="style_Classic"
                                    name="style"
                                    value="Classic"
                                    onChange={handleChange}
                                    className="hidden"
                                />
                                <label
                                    htmlFor="style_Classic"
                                    className="flex flex-col p-2 border-2 border-gray-700 cursor-pointer m-1 rounded rounded hover-bg-gray-600"
                                >
                                    <span className="text-xs font-semibold uppercase">Classic</span>
                                </label>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">
                                Number of Images
                            </label>
                            <input
                                type="number"
                                name="numberOfImages"
                                value={formData.numberOfImages}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-xl shadow-sm placeholder-gray-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                disabled:bg-gray-50 text-gray-900 disabled:border-gray-200 disabled:shadow-none
                                invalid:border-pink-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
                        >
                            Generate
                        </button>
                    </form>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
