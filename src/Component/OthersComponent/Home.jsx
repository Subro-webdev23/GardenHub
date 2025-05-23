import React from 'react';
import ActiveGardeners from './ActiveGardeners';
import TrendingTips from './TrendingTips';
import { useLoaderData } from 'react-router';
import EventSlider from './EventSlider';
import { BiLeaf } from 'react-icons/bi';

const Home = () => {
    const data = useLoaderData()


    return (
        <div>
            {/* Slider */}
            <EventSlider data={data}></EventSlider>
            <div className='max-w-6xl mx-auto'>
                <section className="text-center px-4 py-20 bg-white">
                    <h2 className="text-4xl font-bold">
                        Welcome To <span className="text-green-600">GardenHub</span>
                    </h2>

                    <div className="flex items-center justify-center my-4">
                        <div className="w-16 h-px bg-green-400 mr-2" />
                        <BiLeaf className="text-green-600" size={20} />
                        <div className="w-16 h-px bg-green-400 ml-2" />
                    </div>

                    <p className="max-w-3xl mx-auto text-gray-500 text-base">
                        “Gardening is the art that uses flowers and plants as paint, and the soil and sky as canvas.”
                        <br />
                        We provide ongoing property maintenance including lawn mowing, fertilizing, spring/fall cleanups,
                        dethatching, aerating, seeding, edging, herbicide application, plant health care, snow plowing,
                        pruning, and tree care and removal.
                    </p>
                </section>
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
                {/* Extra Section */}
                <div className='py-20'>
                    <section className="py-16 bg-white">
                        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                            <h2 className="text-4xl font-bold text-emerald-600 leading-snug">
                                Get Resources And Personal <br />
                                Support To Grow Your Own <br />
                                Food
                            </h2>

                            <p className="text-gray-700 text-lg">
                                We are here to help you start, build, plant, and maintain a community garden full of
                                veggies, flowers and get connected to the community of gardeners.
                            </p>
                        </div>
                    </section>

                </div>
            </div>

        </div>
    );
};

export default Home;