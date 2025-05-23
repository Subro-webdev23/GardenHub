import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import Gardener from '../Component/OthersComponent/Gardener';
import { AuthContext } from '../Component/OthersComponent/AuthContext';

const ExploreGardens = () => {
    const data = useLoaderData();
    const { dark } = useContext(AuthContext);
    return (
        <div className="max-w-6xl mx-auto p-6">
            <h2 className="text-3xl font-bold mb-6 text-center">Meet Our Gardeners</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map(gardener => <Gardener dark={dark} key={gardener._id} gardener={gardener}></Gardener>)}
            </div>
        </div>
    );
};

export default ExploreGardens;