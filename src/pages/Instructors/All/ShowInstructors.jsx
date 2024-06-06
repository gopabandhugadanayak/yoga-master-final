import React, { useEffect, useState } from 'react';
import useAxiosFetch from '../../../hooks/useAxiosFetch';

const salon = {
    photoUrl: '../assets/gallery/image-1.png',
    name: 'John Doe',
    // other properties
};
const Showsalons = () => {
    const axiosInstance = useAxiosFetch();
    const [salons, setsalons] = useState([]);
    useEffect(() => {
        axiosInstance.get('/salons')
            .then(res => setsalons(res.data))
    }, [])
    return (
        <div className='mt-12 dark:bg-black w-[80%] mx-auto'>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8  pt-28">
                {
                    salons.map(salon =><div key={salon._id} className="max-w-xs">
                            <div className="bg-white dark:bg-black dark:border-secondary dark:shadow-white border hover:-translate-y-1 hover:border-secondary cursor-pointer duration-200 rounded-lg py-3">
                                <div className="photo-wrapper p-2">
                                    <img className="w-32 h-32 rounded-full mx-auto" src={"assets/gallery/image-1.png"} alt="John Doe" />
                                </div>
                                <div className="p-2">
                                    <h3 className="text-center dark:text-white text-xl text-gray-900 font-medium leading-8">{salon.name}</h3>
                                    <div className="text-center text-gray-400 text-xs font-semibold">
                                        <p>Salons</p>
                                    </div>
                                    <table className="text-xs my-3">
                                        <tbody><tr>
                                            <td className="px-2 py-2 text-gray-500 font-semibold">Address</td>
                                            <td className="px-2 py-2">{salon.address}</td>
                                        </tr>
                                            <tr>
                                                <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                                                <td className={`px-2 py-2 ${salon.phone || 'text-red-400'}`}>{salon.phone ? salon.phone : 'Not Provided'}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                                <td className="px-2 py-2">{salon.email}</td>
                                            </tr>
                                        </tbody></table>

                                    <div className="text-center my-3">
                                        <a className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">View Profile</a>
                                    </div>

                                </div>
                            </div>
                        </div>)
                }
            </div>

        </div>
    );
};

export default Showsalons;