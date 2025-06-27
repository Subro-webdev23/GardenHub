import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { Link } from 'react-router';

const TrendingCard = ({ tip }) => {
    const { dark } = useContext(AuthContext);
    return (
        <div className={`card bg-base-100 w-96 dark:border border border-gray-300 dark:border-gray-600 hover:shadow-2xl transition duration-300 ${dark ? "dark" : ''} dark:text-white dark:bg-zinc-800`}>
            <figure>
                <img className='w-100 h-65 object-cover'
                    src={tip.imagesURL}
                    alt={tip.title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{tip.title}</h2>
                <p className="text-gray-500 leading-relaxed">
                    {tip.description.split(' ').slice(0, 10).join(' ')} ...see more.
                </p>
                <div>
                    <Link to={`/tipDetails/${tip._id}`} className=" text-white text-xs px-4 py-2 text-center rounded-lg bg-green-600 hover:bg-green-700 transition">
                        See More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TrendingCard;