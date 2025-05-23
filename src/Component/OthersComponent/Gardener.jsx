import React from 'react';

const Gardener = ({ gardener, dark }) => {

    return (
        <div className={`bg-white rounded-2xl shadow-md p-4 hover:shadow-2xl transition duration-300 ${dark ? "dark" : ''} dark:text-white dark:bg-zinc-800`}>
            <img
                src={gardener.image}
                alt={gardener.name}
                className="w-full h-48 object-cover object-top rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold">{gardener.name}</h3>
            <p className="text-sm text-gray-500">{gardener.other_info.location}</p>
            <p className="mt-2 text-gray-600">{gardener.experiences}</p>
            <p className="text-sm text-gray-500">Specialty: {gardener.other_info.specialty}</p>
            {gardener.other_info.contact && (
                <p className="text-sm text-gray-400 mt-1">Contact: {gardener.other_info.contact}</p>
            )}
            {gardener.other_info.social_media && (
                <p className="text-sm text-blue-400 mt-1">Social: {gardener.other_info.social_media}</p>
            )}
            <div className="mt-3 text-sm text-green-600">
                Tips Shared: {gardener.total_shared_tips}
            </div>
        </div>
    );
};

export default Gardener;