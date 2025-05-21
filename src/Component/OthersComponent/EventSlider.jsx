import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router';

const EventSlider = ({ data }) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,

    };

    return (
        <div className="slider-container overflow-x-hidden relative">
            <Slider {...settings}>
                {data.map(event => (
                    <div
                        key={event.id}
                        className=" relative overflow-hidden flex items-center justify-center"
                    >
                        {/* Background image layer */}
                        <div
                            className="absolute inset-0 w-full  bg-cover bg-center bg-no-repeat opacity-80"
                            style={{ backgroundImage: `url("${event.backgroundImage}")` }}
                        ></div>
                        {/* Overlay (optional for darkening image) */}
                        <div className="absolute inset-0 bg-black/40"></div>


                        {/* Content layer */}
                        <div className="relative z-10  my-20 max-w-6xl mx-auto">
                            {/* Green background title */}
                            <h2 className="bg-green-600 inline-block text-5xl text-white font-extrabold uppercase my-1 px-4 py-2">
                                {event.title}
                            </h2>
                            {/* Italic description */}
                            <p className="italic text-2xl my-3 md:w-1/2 text-white leading-relaxed">
                                {event.description}
                            </p>
                            <Link

                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block border-2 border-white text-white px-6 py-2 mt-2 hover:bg-green-600 hover:text-white transition"
                            >
                                Learn More →
                            </Link>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default EventSlider;