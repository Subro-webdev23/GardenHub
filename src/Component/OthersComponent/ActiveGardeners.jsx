import React, { useEffect, useState } from 'react';

const ActiveGardeners = () => {
    const [gardeners, setGardeners] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/activeGardeners")
            .then(res => res.json())
            .then(data => setGardeners(data));
    }, []);
    return (
        <section className="py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                {gardeners.map((gardener, index) => (
                    <div key={index} className="text-center">
                        <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-lg group">
                            <img
                                src={gardener.image}
                                alt={gardener.name}
                                className="w-full h-full object-cover"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute top-1/2 left-1/2 w-96  h-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#000000d0] bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 z-9 flex flex-col items-center justify-center text-white group">
                                <span className="text-3xl mb-1">+</span>
                                <p className="font-bold">{gardener.name}</p>
                                <p className="text-sm">{gardener.experiences}</p>
                            </div>
                        </div>


                    </div>
                ))}
            </div>
        </section>
    );
};

export default ActiveGardeners;