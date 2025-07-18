import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { BiSolidLike } from 'react-icons/bi';
import { useLoaderData } from 'react-router';
import { Tooltip } from 'react-tooltip';
import { AuthContext } from '../Component/OthersComponent/AuthContext';

const TipDetails = () => {
    const [like, setLike] = useState(0)
    const { _id, title, topic, level, description, imagesURL, category, availability } = useLoaderData();
    const { dark } = useContext(AuthContext);
    console.log(title);
    const handleLike = (id) => {
        fetch(`https://assignment-10-server-seven-topaz.vercel.app/tips/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setLike(prev => prev + 1);

            })
            .catch(error => {
                console.error('Error updating like count:', error);
            });


    }

    return (
        <div className='max-w-6xl mx-auto pb-15'>
            <Helmet>
                <title>
                    Details
                </title>
            </Helmet>
            <div className={`max-w-3xl mx-auto p-6 mt-10 shadow-lg rounded-xl ${dark ? "dark" : ''} dark:text-white dark:bg-zinc-800`}>
                <h1 className="text-3xl font-bold mb-4">{title}</h1>

                <div className="rounded-lg overflow-hidden mb-6">
                    <img src={imagesURL} alt={title} className="w-full h-64 object-cover" />
                </div>
                <div onClick={() => handleLike(_id)} >
                    <BiSolidLike size={30} data-tooltip-id="my-tooltip"
                        data-tooltip-content="Like Post" className='my-5 cursor-pointer' />
                    <Tooltip id="my-tooltip" />
                    <p className='mb-5'>{like} Likes</p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-gray-500 mb-6">

                    <div>
                        <span className="font-semibold">Topic:</span> {topic}
                    </div>
                    <div>
                        <span className="font-semibold">Level:</span> {level}
                    </div>
                    <div>
                        <span className="font-semibold">Category:</span> {category}
                    </div>
                    <div>
                        <span className="font-semibold">Availability:</span>{" "}
                        <span className={`px-2 py-1 text-sm rounded ${availability === 'public' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                            {availability}
                        </span>
                    </div>

                </div>

                <p className="text-gray-800 leading-relaxed">{description}</p>
            </div>
        </div>
    );
};

export default TipDetails;