import React from 'react';
import { useLoaderData } from 'react-router';
import EventSlider from './EventSlider';

const Home = () => {
    const data = useLoaderData();
    console.log(data);

    return (
        <div>
            {/* Slider */}
            {/* <EventSlider data={data}></EventSlider> */}

        </div>
    );
};

export default Home;