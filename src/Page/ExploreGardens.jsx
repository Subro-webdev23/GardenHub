import React from 'react';
import { useLoaderData } from 'react-router';
import Gardener from '../Component/OthersComponent/Gardener';

const ExploreGardens = () => {
    const data = useLoaderData();
    return (
        <div className="max-w-6xl mx-auto p-6">
            <h2 className="text-3xl font-bold mb-6 text-center">Meet Our Gardeners</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map(gardener => <Gardener key={gardener._id} gardener={gardener}></Gardener>)}
            </div>
        </div>
    );
};

export default ExploreGardens;