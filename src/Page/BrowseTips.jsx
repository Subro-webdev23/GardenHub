import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';

const BrowseTips = () => {
    const data = useLoaderData();
    const levels = ["All", ...new Set(data.map(obj => obj.level))];
    // console.log(levels);
    const [selectedLevel, setSelectedLevel] = useState("All");
    const filteredTips = selectedLevel === "All"
        ? data
        : data.filter(tip => tip.level === selectedLevel);
    const handleLevel = (level) => {
        console.log(level);
        setSelectedLevel(level);

    }



    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3 mb-6">

                {
                    levels.map(level => <button key={level} onClick={() => handleLevel(level)} className={`px-4 py-2 rounded-full border text-sm font-medium transition cursor-pointer ${selectedLevel === level
                        ? 'bg-green-600 text-white'
                        : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-100'}`}>
                        {level}
                    </button>)
                }

            </div>
            <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200 bg-white">
                <table className="min-w-full table-auto">
                    {/* Table Head */}
                    <thead className="bg-gray-100 text-gray-700 uppercase text-sm leading-normal">
                        <tr>
                            <th className="py-3 px-6 text-left">Image</th>
                            <th className="py-3 px-6 text-left">Title</th>
                            <th className="py-3 px-6 text-left">Category</th>
                            <th className="py-3 px-6 text-center">Details</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody className="text-gray-600 text-sm font-light">
                        {filteredTips.map((tip, index) => (
                            <tr
                                key={index}
                                className="border-b border-gray-200 hover:bg-gray-50 transition duration-300"
                            >
                                <td className="py-3 px-6 text-left">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12">
                                            <img
                                                className="w-full h-full object-cover rounded-lg"
                                                src={tip.imagesURL}
                                                alt={tip.title}
                                            />
                                        </div>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-left font-medium">{tip.title}</td>
                                <td className="py-3 px-6 text-left capitalize">{tip.category}</td>
                                <td className="py-3 px-6 text-center">
                                    <Link to={`/tipDetails/${tip._id}`} className=" text-white text-xs px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 transition">
                                        See More
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default BrowseTips;