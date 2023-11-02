import React, { useEffect, useState } from 'react';

function SideBar() {

    //Connection test, initial env setup
    const [message, setMessage] = useState("Testing connection");
    const [array, setArray] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/test")
            .then((response) => response.json())
            .then((data) => {
                setMessage(data.message);
                setArray(data.array);
            })
            .catch((error) => {
                console.error('API error:', error)
                setMessage('API is offline')
            });
    }, []);

    const [formData, setFormData] = useState({
        roomType: '',
        cabinetryStyle: '',
        cabinetColor: '',
        hardwareFinish: '',
        style: '',
        numberOfImages: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Make the API request using formData
        console.log(formData); // Replace with your API request code
    };

    return (
        <aside className="bg-slate-800 rounded-xl shadow p-4 m-2 sm:w-fit sm:max-w-96">
            <div className="">
                <h2>Your Space</h2>
                <p>Testing connection</p>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <div className="">
                            <label className="block  mb-2">Room Type</label>
                            <div className="flex flex-row flex-wrap space-x-2">
                                <input
                                    type="radio"
                                    id="roomType_Kitchen"
                                    name="roomType"
                                    value="Kitchen"
                                    onChange={handleChange}
                                    className="hidden"
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
                                className="border rounded p-2"
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

export default SideBar;
