import React, { useContext, useEffect, useState } from 'react';
import Gardener from '../Component/OthersComponent/Gardener';
import { AuthContext } from '../Component/OthersComponent/AuthContext';
import { Helmet } from 'react-helmet';

const ExploreGardens = () => {
    const { dark } = useContext(AuthContext);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("http://localhost:3000/gardeners")
            .then(res => res.json())
            .then(data => {
                setData(data)
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
    return (
        <div className="max-w-6xl mx-auto p-6">
            <Helmet>
                <title>
                    Explore Gardeners
                </title>
            </Helmet>
            <h2 className="text-3xl font-bold mb-6 text-center">Meet Our Gardeners</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map(gardener => <Gardener dark={dark} key={gardener._id} gardener={gardener}></Gardener>)}
            </div>
        </div>
    );
};

export default ExploreGardens;