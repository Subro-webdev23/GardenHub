import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Component/OthersComponent/AuthContext';
import { Helmet } from 'react-helmet';
import { FaTable } from 'react-icons/fa';
import { CiViewTable } from 'react-icons/ci';

const BrowseTips = () => {
    const [selectedLevel, setSelectedLevel] = useState("All");
    const { dark } = useContext(AuthContext);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('none');
    const [sortBy, setSortBy] = useState('title');
    const [viewMode, setViewMode] = useState('table'); // 'table' or 'card'

    useEffect(() => {
        fetch("https://assignment-10-server-seven-topaz.vercel.app/publicTips")
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
    }, [])

    if (loading) {
        return (
            <div className='flex justify-center items-center'>
                <span className="loading loading-bars loading-xl"></span>
            </div>
        );
    }

    const levels = ["All", ...new Set(data.map(obj => obj.level))];

    const filteredTips = data.filter(tip => {
        const matchesLevel = selectedLevel === "All" || tip.level === selectedLevel;
        const matchesSearch =
            tip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            tip.category.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesLevel && matchesSearch;
    });

    const sortedTips = [...filteredTips];

    if (sortOrder === 'asc' || sortOrder === 'desc') {
        sortedTips.sort((a, b) => {
            const valueA = a[sortBy]?.toLowerCase();
            const valueB = b[sortBy]?.toLowerCase();
            return sortOrder === 'asc'
                ? valueA.localeCompare(valueB)
                : valueB.localeCompare(valueA);
        });
    }

    const handleLevel = (level) => {
        setSelectedLevel(level);
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <Helmet>
                <title>Browse All Tips</title>
            </Helmet>

            {/* Filter, Search, Sort, View Toggle */}
            <div className="flex flex-wrap lg:justify-between gap-3 mb-6">
                {/* Level Filter */}
                <div className="flex flex-wrap gap-2">
                    {
                        levels.map(level => (
                            <button
                                key={level}
                                onClick={() => handleLevel(level)}
                                className={`px-4 py-2 rounded-full border text-sm font-medium transition cursor-pointer ${selectedLevel === level
                                    ? 'bg-green-600 text-white'
                                    : 'bg-white border-gray-300 text-gray-700 dark:text-white dark:bg-zinc-800'
                                    }`}
                            >
                                {level}
                            </button>
                        ))
                    }
                </div>

                {/* Controls: Search, Sort, Toggle */}
                <div className="flex flex-wrap gap-3 items-center">
                    <button
                        onClick={() => setViewMode(viewMode === 'table' ? 'card' : 'table')}
                        className="px-3 py-2 border rounded-md text-sm dark:bg-zinc-700 dark:text-white"
                        title={`Switch to ${viewMode === 'table' ? 'Card' : 'Table'} View`}
                    >
                        {viewMode !== 'table' ? <CiViewTable /> : <FaTable />}
                    </button>
                    <input
                        type="text"
                        placeholder="Search by title or category"
                        className="px-3 py-2 border rounded-md text-sm dark:bg-zinc-700 dark:text-white"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />

                    <select
                        onChange={(e) => setSortOrder(e.target.value)}
                        value={sortOrder}
                        className="px-2 py-2 border rounded-md text-sm dark:bg-zinc-700 dark:text-white"
                    >
                        <option value="none" disabled>Sort</option>
                        <option value="asc">A-Z</option>
                        <option value="desc">Z-A</option>
                    </select>


                </div>
            </div>

            {/* Table View */}
            {viewMode === 'table' && (
                <div className={`overflow-x-auto rounded-xl shadow-lg border border-gray-200 bg-white ${dark ? "dark" : ''} dark:text-white dark:bg-zinc-800`}>
                    <table className="min-w-full table-auto">
                        <thead className={`bg-gray-100 text-gray-700 uppercase text-sm leading-normal ${dark ? "dark" : ''} dark:text-white dark:bg-zinc-600`}>
                            <tr>
                                <th className="py-3 px-6 text-left">Image</th>
                                <th className="py-3 px-6 hidden lg:table-cell text-left">Title</th>
                                <th className="py-3 px-6 hidden lg:table-cell text-left">Category</th>
                                <th className="py-3 px-6 text-center">Details</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-500 text-sm font-light">
                            {sortedTips.map((tip, index) => (
                                <tr
                                    key={index}
                                    className={`border-b border-gray-200 hover:bg-gray-50 transition duration-300 ${dark ? "dark" : ''} dark:hover:bg-zinc-700`}
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
                                    <td className="py-3 px-6 text-left hidden lg:table-cell font-medium">
                                        {tip.title}
                                    </td>
                                    <td className="py-3 px-6 text-left hidden lg:table-cell capitalize">
                                        {tip.category}
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <Link to={`/tipDetails/${tip._id}`} className="text-white text-xs px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 transition">
                                            See More
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Card View */}
            {viewMode === 'card' && (
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6">
                    {sortedTips.map((tip, index) => (
                        <div
                            key={index}
                            className={`border rounded-lg p-4 shadow-md transition hover:shadow-lg ${dark ? "bg-zinc-800 text-white" : "bg-white text-gray-800"
                                }`}
                        >
                            <img
                                src={tip.imagesURL}
                                alt={tip.title}
                                className="w-full h-40 object-cover rounded-md mb-3"
                            />
                            <h3 className="text-lg font-semibold mb-1">{tip.title}</h3>
                            <p className="text-sm capitalize text-gray-500 dark:text-gray-300 mb-2">
                                {tip.category}
                            </p>
                            <Link
                                to={`/tipDetails/${tip._id}`}
                                className="inline-block mt-2 text-white text-xs px-4 py-2 rounded bg-green-600 hover:bg-green-700"
                            >
                                See More
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BrowseTips;
