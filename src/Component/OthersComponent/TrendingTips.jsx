import React, { useEffect, useState } from 'react';

const TrendingTips = () => {
    const [tips, setTips] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/tips")
            .then(res => res.json())
            .then(data => setTips(data));
    }, []);

    return (
        <section className="py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                {
                    tips.map((tip, index) => {
                        return (
                            <div key={index} className="card bg-base-100 w-96 shadow-sm">
                                <figure>
                                    <img className='w-100 h-65 object-cover'
                                        src={tip.image}
                                        alt={tip.title} />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{tip.title}</h2>
                                    <p>{tip.tip}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default TrendingTips;