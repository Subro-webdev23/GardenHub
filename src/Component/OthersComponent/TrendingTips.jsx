import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';

const TrendingTips = () => {
    const [tips, setTips] = useState([])
    const { dark } = useContext(AuthContext);
    useEffect(() => {
        // setLoading(true)
        fetch("http://localhost:3000/tips")
            .then(res => res.json())
            .then(data => setTips(data));
        // setLoading(false)
    }, []);

    return (
        <section className={`py-10 `}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                {
                    tips.map((tip, index) => {
                        return (
                            <div key={index} className={`card bg-base-100 w-96 dark:border border border-gray-300 dark:border-gray-600 hover:shadow-2xl transition duration-300 ${dark ? "dark" : ''} dark:text-white dark:bg-zinc-800`}>
                                <figure>
                                    <img className='w-100 h-65 object-cover'
                                        src={tip.imagesURL}
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