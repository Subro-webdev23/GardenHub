import React from 'react';
import { useLoaderData } from 'react-router';

const TipDetails = () => {
    const { title, topic, level, description, imagesURL, category, availability } = useLoaderData();
    console.log(title);

    return (
        <div className='max-w-6xl mx-auto pb-15'>
            <div className="max-w-3xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-xl">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>

                <div className="rounded-lg overflow-hidden mb-6">
                    <img src={imagesURL} alt={title} className="w-full h-64 object-cover" />
                </div>

                <div className="grid grid-cols-2 gap-4 text-gray-700 mb-6">
                    <div>
                        <span className="font-semibold">Topic:</span> {topic}
                    </div>
                    <div>
                        <span className="font-semibold">Level:</span> {level}
                    </div>
                    <div>
                        <span className="font-semibold">Category:</span> {category}
                    </div>
                    <div>
                        <span className="font-semibold">Availability:</span>{" "}
                        <span className={`px-2 py-1 text-sm rounded ${availability === 'public' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                            {availability}
                        </span>
                    </div>
                </div>

                <p className="text-gray-800 leading-relaxed">{description}</p>
            </div>
        </div>
    );
};

export default TipDetails;