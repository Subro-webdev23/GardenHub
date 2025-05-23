import React, { useContext } from 'react';
import { AuthContext } from '../Component/OthersComponent/AuthContext';
import Swal from 'sweetalert2';

const ShareGardenTip = () => {
    const { user, dark } = useContext(AuthContext);
    // console.log(user);
    const handleTip = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const { ...tipsData } = Object.fromEntries(formData.entries());
        console.log(tipsData);

        fetch('http://localhost:3000/tips', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tipsData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Tips Added Successfully.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset();
                }
            })

    }

    return (
        <div className='max-w-6xl mx-auto'>
            <form onSubmit={handleTip} className={`bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl mx-auto space-y-5 ${dark ? "dark" : ''} dark:text-white dark:bg-zinc-800`}>
                <h2 className="text-2xl font-semibold text-center text-green-700 mb-4">
                    Submit a Plant Tip
                </h2>

                {/* Title */}
                <div>
                    <label className="block font-medium text-gray-500 mb-1">Title</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter tip title"
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                    />
                </div>

                {/* Topic */}
                <div>
                    <label className="block font-medium text-gray-500 mb-1">Plant Type / Topic</label>
                    <input
                        type="text"
                        name="topic"
                        placeholder="e.g., Indoor Plant"
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm  focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                    />
                </div>

                {/* Difficulty Level */}
                <div>
                    <label className="block font-medium text-gray-500 mb-1">Difficulty Level</label>
                    <select
                        name="level"
                        className={`w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition ${dark ? "dark" : ''} dark:text-white dark:bg-zinc-800`}
                    >
                        <option>Select Level</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>

                {/* Description */}
                <div>
                    <label className="block font-medium text-gray-500 mb-1">Description</label>
                    <input
                        type="text"
                        name="description"
                        placeholder="Brief description of the tip"
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                    />
                </div>

                {/* Image URL */}
                <div>
                    <label className="block font-medium text-gray-500 mb-1">Image URL</label>
                    <input
                        type="url"
                        name="imagesURL"
                        placeholder="https://example.com/image.jpg"
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm  focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                    />
                </div>

                {/* Category */}
                <div>
                    <label className="block font-medium text-gray-500 mb-1">Category</label>
                    <input
                        type="text"
                        name="category"
                        placeholder="e.g., Gardening, Herbs, Tips"
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                    />
                </div>

                {/* Availability */}
                <div>
                    <label className="block font-medium text-gray-500 mb-1">Availability</label>
                    <select
                        name="availability"
                        className={`w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition ${dark ? "dark" : ''} dark:text-white dark:bg-zinc-800`}
                    >
                        <option>Select Availability</option>
                        <option value="public">Public</option>
                        <option value="hidden">Hidden</option>
                    </select>
                </div>

                {/* Email (readonly) */}
                <div>
                    <label className="block font-medium text-gray-500 mb-1">Email</label>
                    <input
                        type="text"
                        name="email"
                        value={user.email}
                        readOnly
                        className="w-full px-4 py-2 border border-gray-200 rounded-xl text-gray-500 cursor-not-allowed"
                    />
                </div>

                {/* Name (readonly) */}
                <div>
                    <label className="block font-medium text-gray-700 mb-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={user.displayName}
                        readOnly
                        className="w-full px-4 py-2 border border-gray-200 rounded-xl  text-gray-500 cursor-not-allowed"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-xl font-medium shadow-lg transition duration-300"
                >
                    Submit Tip
                </button>
            </form>


        </div>
    );
};

export default ShareGardenTip;