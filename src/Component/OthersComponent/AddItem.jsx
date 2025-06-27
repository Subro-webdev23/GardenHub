// AddItem.jsx
import React, { useContext, useState } from 'react';
import { AuthContext } from '../Component/OthersComponent/AuthContext';
import Swal from 'sweetalert2';

const AddItem = () => {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const form = e.target;
        const title = form.title.value;
        const category = form.category.value;
        const level = form.level.value;
        const imagesURL = form.imagesURL.value;
        const email = user?.email;

        const newTip = { title, category, level, imagesURL, email };

        fetch('https://assignment-10-server-seven-topaz.vercel.app/addTip', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTip),
        })
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                if (data.insertedId) {
                    Swal.fire('Success!', 'Item added successfully!', 'success');
                    form.reset();
                }
            });
    };

    return (
        <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Add New Item</h2>
            <form onSubmit={handleSubmit} className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow space-y-4">
                <input type="text" name="title" placeholder="Title" required className="w-full p-3 border rounded dark:bg-zinc-700 dark:text-white" />
                <input type="text" name="category" placeholder="Category" required className="w-full p-3 border rounded dark:bg-zinc-700 dark:text-white" />
                <select name="level" required className="w-full p-3 border rounded dark:bg-zinc-700 dark:text-white">
                    <option value="">Select Level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                </select>
                <input type="text" name="imagesURL" placeholder="Image URL" required className="w-full p-3 border rounded dark:bg-zinc-700 dark:text-white" />
                <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
                    {loading ? 'Submitting...' : 'Add Item'}
                </button>
            </form>
        </div>
    );
};

export default AddItem;
