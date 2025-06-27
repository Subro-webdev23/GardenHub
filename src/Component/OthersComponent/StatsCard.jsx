import React from 'react';

const StatsCard = ({ label, value, dark }) => {
    return (
        <div className={`p-6 rounded-lg shadow-md ${dark ? "bg-zinc-800 text-white" : "bg-white text-gray-800"}`}>
            <h3 className="text-sm font-medium mb-1">{label}</h3>
            <p className="text-2xl font-bold">{value}</p>
        </div>
    );
};

export default StatsCard;