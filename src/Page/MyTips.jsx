import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router';
import TipsTable from './TipsTable';
import { AuthContext } from '../Component/OthersComponent/AuthContext';

const MyTips = () => {
    const data = useLoaderData();
    const { dark } = useContext(AuthContext);
    const [tips, setTips] = useState(data)
    console.log(data);


    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">My Tips</h1>

            <div className="overflow-x-auto rounded-lg shadow">
                <table className={`min-w-full bg-white text-left border border-gray-200 ${dark ? "dark" : ''} dark:text-white dark:bg-zinc-800`}>
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
                        {tips.map((tip) => <TipsTable tips={tips} setTips={setTips} tip={tip} key={tip._id}></TipsTable>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyTips;