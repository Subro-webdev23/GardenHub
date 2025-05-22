import React from 'react';
import { Link } from 'react-router';


const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">

            <div className="mb-8">
                <svg
                    className="w-40 h-40 text-green-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 240 240"
                >
                    <circle cx="120" cy="120" r="120" fill="currentColor" opacity="0.1" />
                    <path
                        d="M72 168h96M72 120h96M72 72h96"
                        stroke="currentColor"
                        strokeWidth="8"
                        strokeLinecap="round"
                    />
                </svg>
            </div>


            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-6 text-center max-w-md">
                Oops! The page you’re looking for doesn’t exist .
            </p>
            <Link
                to="/"
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-xl shadow-lg transition"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFoundPage;
