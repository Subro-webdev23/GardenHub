import React from 'react';
import { useLoaderData } from 'react-router';
import ActiveGardeners from './ActiveGardeners';

const Home = () => {
    const data = useLoaderData();
    console.log(data);

    return (
        <div>
            {/*Featured Gardeners  */}
            <div className='py-20'>
                <h1 className='text-4xl font-bold'>Active Gardeners</h1>
                <ActiveGardeners></ActiveGardeners>
            </div>

            {/* Top Trending Tips section */}
            <div className='py-20'>
                <h2 className='text-4xl font-bold'>Top Trending Tips</h2>
            </div>

        </div>
    );
};

export default Home;