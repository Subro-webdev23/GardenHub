import React, { useContext } from 'react';
import { AuthContext } from '../Component/OthersComponent/AuthContext';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateTips = () => {
    const { user } = useContext(AuthContext);
    const data = useLoaderData();
    console.log("update", data);
    const { _id, title, availability, category, description, imagesURL, level, topic } = data;

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedTip = Object.fromEntries(formData.entries())
        console.log(updatedTip);

        // // send updated Tip to the db
        fetch(`http://localhost:3000/update/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedTip)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Tip updated successfully.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div className='max-w-6xl mx-auto'>
            <form onSubmit={handleUpdate} className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl mx-auto space-y-5">
                <h2 className="text-2xl font-semibold text-center text-green-700 mb-4">
                    Update Plant Tip
                </h2>

                {/* Title */}
                <div>
                    <label className="block font-medium text-gray-700 mb-1">Title</label>
                    <input
                        type="text"
                        name="title"
                        defaultValue={title}
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                    />
                </div>

                {/* Topic */}
                <div>
                    <label className="block font-medium text-gray-700 mb-1">Plant Type / Topic</label>
                    <input
                        type="text"
                        defaultValue={topic}
                        name="topic"
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                    />
                </div>

                {/* Difficulty Level */}
                <div>
                    <label className="block font-medium text-gray-700 mb-1">Difficulty Level</label>
                    <select
                        name="level"
                        defaultValue={level}
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                    >
                        <option>Select Level</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>

                {/* Description */}
                <div>
                    <label className="block font-medium text-gray-700 mb-1">Description</label>
                    <input
                        type="text"
                        defaultValue={description}
                        name="description"
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                    />
                </div>

                {/* Image URL */}
                <div>
                    <label className="block font-medium text-gray-700 mb-1">Image URL</label>
                    <input
                        type="url"
                        defaultValue={imagesURL}
                        name="imagesURL"
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                    />
                </div>

                {/* Category */}
                <div>
                    <label className="block font-medium text-gray-700 mb-1">Category</label>
                    <input
                        type="text"
                        defaultValue={category}
                        name="category"
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                    />
                </div>

                {/* Availability */}
                <div>
                    <label className="block font-medium text-gray-700 mb-1">Availability</label>
                    <select
                        name="availability"
                        defaultValue={availability}
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                    >
                        <option>Select Availability</option>
                        <option value="public">Public</option>
                        <option value="hidden">Hidden</option>
                    </select>
                </div>

                {/* Email (readonly) */}
                <div>
                    <label className="block font-medium text-gray-700 mb-1">Email</label>
                    <input
                        type="text"
                        name="email"
                        value={user.email}
                        readOnly
                        className="w-full px-4 py-2 border border-gray-200 rounded-xl bg-gray-100 text-gray-500 cursor-not-allowed"
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
                        className="w-full px-4 py-2 border border-gray-200 rounded-xl bg-gray-100 text-gray-500 cursor-not-allowed"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-xl font-medium shadow-lg transition duration-300"
                >
                    Update Tip
                </button>
            </form>


        </div>
    );
};

export default UpdateTips;