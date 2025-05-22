import React from 'react';
import ActiveGardeners from './ActiveGardeners';
import TrendingTips from './TrendingTips';
import { useLoaderData } from 'react-router';
import EventSlider from './EventSlider';

const Home = () => {
    const data = useLoaderData()


    return (
        <div>
            {/* Slider */}
            <EventSlider data={data}></EventSlider>
            <div className='max-w-6xl mx-auto'>
                {/*Featured Gardeners  */}
                <div className='py-20'>
                    <h1 className='text-4xl font-bold'>Active Gardeners</h1>
                    <ActiveGardeners></ActiveGardeners>
                </div>

                {/* Top Trending Tips section */}
                <div className='py-20'>
                    <h2 className='text-4xl font-bold'>Top Trending Tips</h2>
                    <TrendingTips></TrendingTips>
                </div>
            </div>

        </div>
    );
};

export default Home;