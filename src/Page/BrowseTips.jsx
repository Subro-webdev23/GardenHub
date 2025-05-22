import React from 'react';
import { Link, useLoaderData } from 'react-router';

const BrowseTips = () => {
    const data = useLoaderData();
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
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
                        {data.map((tip, index) => (
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