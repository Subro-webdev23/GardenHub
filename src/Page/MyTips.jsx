import React from 'react';
import { Link, useLoaderData } from 'react-router';

const MyTips = () => {
    const data = useLoaderData();
    console.log(data);

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">My Tips</h1>

            <div className="overflow-x-auto rounded-lg shadow">
                <table className="min-w-full bg-white text-left border border-gray-200">
                    <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
                        <tr>
                            <th className="px-6 py-3">Image</th>
                            <th className="px-6 py-3">Title</th>
                            <th className="px-6 py-3">Topic</th>
                            <th className="px-6 py-3">Category</th>
                            <th className="px-6 py-3">Level</th>
                            <th className="px-6 py-3">Availability</th>
                            <th className="px-6 py-3 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((tip) => (
                            <tr key={tip._id} className="border-t hover:bg-gray-50">
                                <td className="px-6 py-4">
                                    <img
                                        src={tip.imagesURL}
                                        alt={tip.title}
                                        className="h-12 w-12 rounded object-cover"
                                    />
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900">{tip.title}</td>
                                <td className="px-6 py-4">{tip.topic}</td>
                                <td className="px-6 py-4">{tip.category}</td>
                                <td className="px-6 py-4">{tip.level}</td>
                                <td className="px-6 py-4 capitalize">
                                    <span
                                        className={`px-2 py-1 rounded text-xs font-medium ${tip.availability === 'public'
                                            ? 'bg-green-100 text-green-700'
                                            : 'bg-yellow-100 text-yellow-700'
                                            }`}
                                    >
                                        {tip.availability}
                                    </span>
                                </td>
                                <td className="px-6 py-4 flex justify-center gap-3">
                                    <Link to={`/update/${tip._id}`} className="px-3 py-1 text-sm text-white bg-blue-600 rounded hover:bg-blue-700 transition">
                                        Update
                                    </Link>
                                    <button className="px-3 py-1 text-sm text-white bg-red-600 rounded hover:bg-red-700 transition">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyTips;