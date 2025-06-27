import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import TrendingCard from './TrendingCard';

const TrendingTips = () => {
    const [tips, setTips] = useState([])
    useEffect(() => {
        // setLoading(true)
        // https://assignment-10-server-seven-topaz.vercel.app
        fetch("http://localhost:3000/tips")
            .then(res => res.json())
            .then(data => setTips(data));
        // setLoading(false)
    }, []);

    return (
        <section className={`py-10 `}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                {
                    tips.map((tip, index) => <TrendingCard key={index} tip={tip}></TrendingCard>)
                }
            </div>
        </section>
    );
};

export default TrendingTips;