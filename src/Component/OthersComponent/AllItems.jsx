// AllItems.jsx
import React, { useEffect, useState } from 'react';

const AllItems = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3000/allTips') // replace with your API endpoint
            .then(res => res.json())
            .then(data => {
                setItems(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-40">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        );
    }

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">All Items ({items.length})</h2>
            <div className="overflow-x-auto shadow rounded-lg">
                <table className="min-w-full bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700">
                    <thead className="bg-gray-100 dark:bg-zinc-700 text-gray-700 dark:text-white text-sm uppercase">
                        <tr>
                            <th className="px-6 py-3 text-left">Image</th>
                            <th className="px-6 py-3 text-left">Title</th>
                            <th className="px-6 py-3 text-left">Category</th>
                            <th className="px-6 py-3 text-left">Level</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <tr key={item._id} className="border-t border-gray-200 dark:border-zinc-600 hover:bg-gray-50 dark:hover:bg-zinc-700">
                                <td className="px-6 py-3">
                                    <img src={item.imagesURL} alt={item.title} className="w-12 h-12 object-cover rounded" />
                                </td>
                                <td className="px-6 py-3">{item.title}</td>
                                <td className="px-6 py-3 capitalize">{item.category}</td>
                                <td className="px-6 py-3 capitalize">{item.level}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllItems;