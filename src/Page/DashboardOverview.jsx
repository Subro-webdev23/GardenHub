import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Component/OthersComponent/AuthContext';

const DashboardOverview = () => {
    const { user } = useContext(AuthContext);
    console.log(user.email);

    const [totalTips, setTotalTips] = useState(0);
    const [myTips, setMyTips] = useState(0);


    useEffect(() => {
        fetch('http://localhost:3000/publicTips')
            .then(res => res.json())
            .then(data => setTotalTips(data.length));
    }, []);
    useEffect(() => {
        fetch(`http://localhost:3000/myTips/${user.email}`)
            .then(res => res.json())
            .then(data => setMyTips(data.length))
    }, [user.email])
    // console.log(myTips, totalTips, "OverView");

    return (
        <div>
            <div className="mb-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold">Welcome back, {user?.displayName || 'User'}! </h2>
                    <p className="text-gray-500 text-sm mt-1">Here is your current dashboard summary</p>
                </div>

            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-white dark:bg-zinc-800 shadow rounded-lg p-4">
                    <h4 className="text-sm text-gray-500 dark:text-gray-400">Total Tips</h4>
                    <p className="text-3xl font-bold text-green-600 mt-2">{totalTips}</p>
                </div>
                <div className="bg-white dark:bg-zinc-800 shadow rounded-lg p-4">
                    <h4 className="text-sm text-gray-500 dark:text-gray-400">Your Tips</h4>
                    <p className="text-3xl font-bold text-blue-600 mt-2">{myTips}</p>
                </div>
            </div>
        </div>
    );
};

export default DashboardOverview;